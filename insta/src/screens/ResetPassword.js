import React, { useState} from "react";


import { SafeAreaView,StyleSheet,View,Text} from "react-native";
import { Button,TextInput } from "react-native-paper";
import CustomInput from "../components/CustomInput";
import axios from "axios";
import { useFormik } from 'formik';
import validations1 from "../components/validationsPassword";





const ResetPassword =()=>{
    const [obj,setObj]=useState({
        name:"",
        surname:"",
        mail:"",
        userName:"",
        password:"",
        phone:"",
        resetPasswordToken:"",

    })
    
  const [showPassword,setShowPassword]=useState(true)
   const  formik= useFormik({
    initialValues:{
        password:"",
        passwordRepeat:""
    },
    validationSchema: validations1,
    onSubmit:(values)=>{
        try{
          //reset password tokeni backendden alamıyorum şuan hatırlatma...backendde sorgusunda bir sorun var o yüzden @get yapamadım.useffect ile onu çekmem lazım normlde
            obj.password = formik.values.password
            resetPasswordToken = resetPasswordToken
        axios.post("http://10.110.213.66:9091/auth/reset_password?token="+`${resetPasswordToken}`).then(res=>{
          set
        })
        console.warn("şifre değiştirildi")
        console.log(obj);
        }catch(error){
            console.warn(error)
        }
        console.log(obj)
    },
    });
    
    return(
        <SafeAreaView  style={styles.View}>
            
            <CustomInput placeholder="Şifre" 
            value={formik.values.password}
            secureTextEntry={showPassword}
            onChangeText={formik.handleChange('password')}
           
            right={<TextInput.Icon
              name="eye"
              color={"black"}
              onPress={() => {
                setShowPassword(!showPassword)
              }}
            />
          }
            />
            <View style={styles.errorMessage}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize:12, color:"red", fontWeight:'600', letterSpacing:0.5, textAlign:'center' }}>{formik.errors.password || formik.touched.password}</Text> 
            </View>
            <CustomInput placeholder="Şifre Tekrar" 
            value={formik.values.passwordRepeat}
            secureTextEntry={showPassword}
            onChangeText={formik.handleChange('passwordRepeat')}
          
            right={<TextInput.Icon
              name="eye"
              color={"black"}
              onPress={() => {
                setShowPassword(!showPassword)
              }}
            />
          }
            />
            <View style={styles.errorMessage}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={{fontSize:12, color:"red", fontWeight:'600', letterSpacing:0.5, textAlign:'center' }}>{formik.errors.passwordRepeat || formik.touched.passwordRepeat}</Text> 
            </View>
            <Button onPress={formik.handleSubmit} 
            
            >Onayla</Button>
       
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    View:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    errorMessage: {
        width:'100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 8
    }
   
})
export default ResetPassword;

   