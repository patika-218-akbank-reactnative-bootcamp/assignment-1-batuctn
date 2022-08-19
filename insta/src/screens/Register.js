/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import CustomInput from '../components/CustomInput';

const Register = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Text style={styles.firstText}>
        Telefon Numarası veya E-posta Adresi Gir
      </Text>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}>
        <Tab.Item
          containerStyle={styles.containerStyle}
          title="Telefon"
          titleStyle={styles.titleStyle}
          icon={{name: 'phone-portrait', type: 'ionicon'}}
        />
        <Tab.Item
          containerStyle={styles.containerStyle}
          title="E-posta"
          titleStyle={styles.titleStyle}
          icon={{name: 'mail', type: 'ionicon'}}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.TabViewItem}>
          <CustomInput placeholder={'Telefon Numarası'} />
        </TabView.Item>
        <TabView.Item style={styles.TabViewItem}>
          <CustomInput placeholder={'E-posta Adresi'} />
        </TabView.Item>
      </TabView>
    </>
  );
};
export default Register;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B2DFFC',
    borderRadius: 20,
    width: '50%',
  },
  firstText: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  TabViewItem: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    marginTop: 25,
  },
  indicatorStyle: {
    backgroundColor: 'black',
    height: 1,
  },
  containerStyle: {
    backgroundColor: '#F5F5F5',
  },
  titleStyle: {
    fontSize: 18,
    color: 'black',
  },
});
