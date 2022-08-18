import { View,Image, StyleSheet,Text } from 'react-native'
import React, { useState,useContext } from 'react'
import CustomInput from '../components/CustomInput'
import { Button, TextInput } from "react-native-paper";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ThemeSwitcher from '../context/ThemeSwitcher';
import ThemeContext from "../context/ThemeContext";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [userTeam, setUserTeam] = useState({
    userName: "",
    password: "" 
  });
  const [showPassword,setShowPassword]=useState(true)
  const navigation = useNavigation();

  const handleLogin = async () => {
    //backend bağlantısına gerek olmadığı için kaldırıldı.Şifresiz Giriş aktifs
  //   try{
  //     const response = await axios.post("http://10.110.213.34:9091/auth/login",userTeam)
      
  //     AsyncStorage.setItem("user",JSON.stringify(response.data))
  //     AsyncStorage.setItem("userId",JSON.stringify(response.data.id))
  //     console.warn("Hoşgeldiniz")
  //     navigation.navigate('Home')
  //     }
  // catch (error){
  //     console.warn(error)
      
  //   }
    navigation.navigate('Home')
  }; 
  return (
    <View style={theme === "dark" ? styles.darkTheme : styles.body}>
    <View style={styles.container} >
      
      <Image 
      style={styles.tinyLogo}
      source={require('../images/Logo1.png')}
      />
      <ThemeSwitcher/>
      <CustomInput 
      placeholder={"Telefon numarası,kullanıcı adı veya e-posta"}
      value={userTeam.userName} onChangeText={(text)=>{
        setUserTeam({...userTeam,userName:text})
      }}
      />
      <CustomInput 
      value={userTeam.password} onChangeText={(text)=>{
        setUserTeam({...userTeam,password:text})
      }}
      placeholder={"Şifre"} 
      secureTextEntry={showPassword} 
      right={<TextInput.Icon
          name="eye"
          color={"black"}
          onPress={() => {
            setShowPassword(!showPassword)
          }}
        />
      }/>
      <TouchableOpacity onPress={(()=>{
        navigation.navigate('ForgotPassword')
      })}>
        <Text style={styles.text}>Şifreni mi Unuttun?</Text>
      </TouchableOpacity>
      <Button style={styles.button} color="white" onPress={() => handleLogin()}>
        Giriş Yap
     </Button>
  
  
    </View>
    <View style={styles.LoginButton}>
      {/* facebook login button kaldırıldı. */}
    {/* <LoginButton 
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
    </View>
    <View style={styles.viewtext2}>
    <TouchableOpacity onPress={()=>{
      navigation.navigate('Register')
    }}>
    <Text style={styles.text2}>Hesabın yok mu? Kaydol.</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  body:{
    display: "flex",
    flex:1,
    alignContent:"center",
    justifyContent:"center",
    height:"100%",  
    
  },
  container: {
    display: "flex",
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    
    
  },
  tinyLogo: {
    width: "60%",
    height: 90,
  },
  text:{
    marginLeft:220,
    marginTop:10,
    color:"#1DA1F2",
    textAlign:"right",
    fontWeight:"bold"
  },
  button:{
    backgroundColor:"#B2DFFC",
    borderRadius:20,
    width:"75%",
    margin:25
  },
  viewtext2:{
    display:"flex",
    width: "100%",
    justifyContent:"flex-end"
    
  },
  text2:{
    alignContent:"flex-end",
    height:50, 
    textAlign:"center",
    textAlignVertical: 'center',
    borderColor:"gray",
    borderTopWidth:1,   
  },
  // LoginButton:{
    
  //   margin:10,
  //   alignItems:"center",  
  // },
  darkTheme:{
    display: "flex",
    alignContent:"center",
    justifyContent:"center",
    height:"100%", 
    backgroundColor:"gray"
  }
});