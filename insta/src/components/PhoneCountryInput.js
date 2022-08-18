import React, {useState, useRef} from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function PhoneCountryInput() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };

  return (
    <View style={styleSheet.MainContainer}>

   

      <PhoneInput 
      
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="TR"
        layout="first"
        withShadow
        autoFocus
        underlineColor={"transparent"}
         activeUnderlineColor={"transparent"}
        containerStyle={styleSheet.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0 ,borderTopRightRadius:10, borderBottomRightRadius:10,backgroundColor:"#e7e7e7" }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />

      <TouchableOpacity  style={styleSheet.button} onPress={() => getPhoneNumber()}>
        <Text style={styleSheet.buttonText}>İleri</Text>
      </TouchableOpacity >
    </View>
  );
};
const styleSheet = StyleSheet.create({

    MainContainer: {
        
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
      
    },
  
    heading:{
      fontSize: 24,
      textAlign: 'center',
      paddingBottom: 20,
      color: 'black',
      
    },
  
    phoneNumberView: {
      width: '80%',
      height: 52,
      borderWidth:2,
        borderColor:'#e8e8e8',
        marginVertical: 5,
      borderRadius:10,
      backgroundColor:"#e7e7e7"
    },
  
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      padding: 8,
      backgroundColor:"#B2DFFC",
    borderRadius:20,
    width:250,
    },
  
    buttonText:{
      fontSize: 20,
      textAlign: 'center',
      color: 'white'
    }
  });