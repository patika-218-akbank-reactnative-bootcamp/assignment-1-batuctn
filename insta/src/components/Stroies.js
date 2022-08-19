/* eslint-disable prettier/prettier */
import {
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  import Entypo from 'react-native-vector-icons/Entypo';
  import {useNavigation} from '@react-navigation/native';
  
  const Stroies = () => {
    const navigation = useNavigation();
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {storyInfo.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.push('Status', {
                  name: data.name,
                  image: data.image,
                })
              }>
              <View style={styles.body}>
                {data.id === 1 ? (
                  <View style={styles.contain}>
                    <Entypo name="circle-with-plus" style={styles.entypo} />
                  </View>
                ) : null}
                <View style={styles.plus}>
                  <Image source={data.image} style={styles.image} />
                </View>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 10,
                      opacity: data.id === 0 ? 1 : 0.5,
                    }}>
                    {data.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };
  
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../images/1.jpg'),
    },
    {
      id: 0,
      name: 'Batman',
      image: require('../images/2.jpg'),
    },
    {
      id: 0,
      name: 'Ironman',
      image: require('../images/3.jpg'),
    },
    {
      id: 0,
      name: 'CaptanAmerica',
      image: require('../images/4.jpg'),
    },
    {
      id: 0,
      name: 'Arrow',
      image: require('../images/5.jpg'),
    },
    {
      id: 0,
      name: 'Hulk',
      image: require('../images/6.jpg'),
    },
    {
      id: 0,
      name: 'WonderWomen',
      image: require('../images/7.jpg'),
    },
  ];
  const styles = StyleSheet.create({
    scrollView: {
      paddingVertical: 20,
    },
    body: {
      flexDirection: 'column',
      paddingHorizontal: 8,
      position: 'relative',
    },
    contain: {
      position: 'absolute',
      bottom: 15,
      right: 10,
      zIndex: 1,
    },
    entypo: {
      fontSize: 20,
      color: '#405de6',
      backgroundColor: 'white',
      borderRadius: 100,
    },
    plus: {
      width: 68,
      height: 68,
      backgroundColor: 'white',
      borderWidth: 1.8,
      borderRadius: 100,
      borderColor: '#c13584',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      resizeMode: 'cover',
      width: '92%',
      height: '92%',
      borderRadius: 100,
      backgroundColor: 'orange',
    },
    text: {},
  });
  export default Stroies;
  