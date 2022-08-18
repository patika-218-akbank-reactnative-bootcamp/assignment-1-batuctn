import React, { useState } from "react";
import { View,Image,StyleSheet,Text} from "react-native";
import Dialog from "react-native-dialog";


const CustomDialog =({data,open,handleClose,}) => {
  

  return (
   
    <Dialog.Container visible={open}>
    <Dialog.Title>Tebrikler</Dialog.Title>
    <Dialog.Description >   
      <View>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/success.png')}
      />
      </View>
      <View>
        <Text>E-mail Adresinize şifre sıfırlama linki gönderildi.</Text>
      </View>
    </Dialog.Description>
    <Dialog.Button label="Şifre Belirle" onPress={()=>{
        

    }}/>
    <Dialog.Button label="Kapat" onPress={()=>{
        handleClose()
    }}/>
  </Dialog.Container>
  );
}
const styles = StyleSheet.create({
 
  tinyLogo: {
    width: 80,
    height: 80,
  },
  
});
export default CustomDialog;