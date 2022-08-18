import React,{useState} from 'react';
import {StyleSheet,View} from 'react-native';
import { Tab, Text, TabView } from '@rneui/themed';
import CustomInput from '../components/CustomInput';



export default () => {
const [index, setIndex] = useState(0);

return (
  < >
    <Text style={styles.firstText}>Telefon Numarası veya E-posta Adresi Gir</Text>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'black',
        height: 1, 
      }}
    >
      <Tab.Item
        containerStyle={{backgroundColor:"#F5F5F5",}}
        title="Telefon"
        titleStyle={{ fontSize: 18,color:"black"}}
        icon={{ name: 'phone-portrait', type: 'ionicon'}}
      />
      <Tab.Item
        containerStyle={{backgroundColor:"#F5F5F5"}}
        title="E-posta"
        titleStyle={{ fontSize: 18 ,color:"black"}}
        icon={{ name: 'mail', type: 'ionicon'}}
      />
    </Tab>
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={styles.TabViewItem}>
      </TabView.Item>
      <TabView.Item style={styles.TabViewItem}>
      <CustomInput placeholder={"E-posta Adresi"} />
      </TabView.Item>
    </TabView>
    
  </>
);
};
const styles = StyleSheet.create({
  button:{
    backgroundColor:"#B2DFFC",
    borderRadius:20,
    width:"50%",
  },
  firstText:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    color:"black",
    textAlign:"center",
    fontSize:24,
    fontWeight:"bold"
  },
  TabViewItem:{
    width: '100%',
    height:"20%",
    alignItems:"center",
    marginTop:25
  }
})