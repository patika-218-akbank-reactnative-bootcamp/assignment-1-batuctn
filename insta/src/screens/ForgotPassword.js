import React, { useState} from "react";

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,View,Text} from "react-native";
import { Button,TextInput } from "react-native-paper";
import CustomInput from "../components/CustomInput";
import axios from "axios";
import { useFormik } from 'formik';
import validations from "../components/validationsMail";
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';



const ForgotPassword =()=>{
    const [obj,setObj]=useState({
        name:"",
        surname:"",
        mail:"",
        userName:"",
        password:"",
        phone:"",

    })
    const navigation = useNavigation();
    
   const  formik= useFormik({
    initialValues:{
        mail:"",
        mailRepeat:""
    },
    validationSchema: validations,
    onSubmit:(values)=>{
        try{
            obj.mail = formik.values.mail
        axios.post("http://10.110.213.34:9091/auth/forgot_password", obj)
        console.warn("Şifre yenileme Maili Gönderildi.")
            
        console.log(obj);
        navigation.navigate("ResetPassword")
                
        }catch(error){
            console.warn(error)
        }
    },
    });
   
    return(
        <SafeAreaView onS style={styles.View}>
            <CustomInput placeholder="E-mail" 
            value={formik.values.mail}
            onChangeText={formik.handleChange('mail')}
            right={<TextInput.Icon
                name="mail"
                color={"black"}
            />}
            />
            <View style={styles.errorMessage}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.errorText}>{formik.errors.mail || formik.touched.mail}</Text> 
            </View>
            <CustomInput placeholder="E-mail Tekrar" 
            value={formik.values.mailRepeat}
            onChangeText={formik.handleChange('mailRepeat')}
            right={<TextInput.Icon
                name="mail"
                color={"black"}
            />}
            />
            <View style={styles.errorMessage}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.errorText}>{formik.errors.mailRepeat || formik.touched.mailRepeat}</Text> 
            </View>
            <Button  onPress={formik.handleSubmit}>Onayla</Button>
            
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
    },
    errorText:{
        fontSize:12,
        color:"red",
        fontWeight:'600',
        letterSpacing:0.5,
        textAlign:'center' 

    }
   
})
export default ForgotPassword;

   