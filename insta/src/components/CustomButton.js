
import React from 'react'
import { Text, StyleSheet,Pressable} from 'react-native'
import { Portal } from 'react-native-paper';


const CustomButton = ({onPress,text,title}) => {
  return (
    <Portal.Host>
    <Pressable   onPress={onPress} title={title} style={styles.container} >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
    </Portal.Host>
  )
}

 const styles = StyleSheet.create({
     container:{
         backgroundColor:'blue',
         padding:15,
         marginVertical:5,
         alignItems:'center',
         borderRadius:5,
     },
     text:{
         fontWeight:'bold',
         color:'white',
     }
 })
export default CustomButton