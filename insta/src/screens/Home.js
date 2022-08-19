import { View,StatusBar,Text,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import Feather from "react-native-vector-icons/Feather"
import Stroies from '../components/Stroies'
import Post from '../components/Post'
import { ScrollView } from 'react-native-gesture-handler'
import ThemeSwitcher from '../context/ThemeSwitcher'
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const Header = ()=>{
    return(
      <View style={styles.navbar}>
            <FontAwesome name='plus-square-o' style={styles.font24}/>
            <Text style={styles.textInsta} >
                Instagram
            </Text>
            <View style={{flexDirection:"row"}}>
            <ThemeSwitcher/>
            <Feather name="navigation" style={styles.font24}/>
            </View>
        </View>
    )
  }

  return (
    <View style={theme === "dark" ? styles.darkTheme : styles.lightTheme}>
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true}/>
        <Header/>
        <ScrollView>
          <Stroies/>
          <Post 
            postDescription={"Bekle Beni Gotham"} 
            likes={2132} 
            postTitle={'arkhamoftheking'} 
            postPersonImage={require('../images/2.jpg')} 
            postImage={require('../images/2.jpg')}
            
            />
             <Post 
            postDescription={"newPost"} 
            likes={62723} 
            postTitle={'WonderWOMEN_14'} 
            postPersonImage={require('../images/7.jpg')} 
            postImage={require('../images/7.jpg')}
            />
        </ScrollView>


    </View>
  )
}
const styles = StyleSheet.create({
  lightTheme:{
    backgroundColor:"white",
    height:"100%"
  },
  navbar:{
    justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:15,
    alignItems:"center",
   
    
  },
  textInsta:{
    fontFamily:"Lobster-Regular",
    fontSize:25,
    fontWeight:'500'
  },
  font24:{
    fontSize: 24
  },
  darkTheme:{
    backgroundColor:"gray"
  }
})
export default Home