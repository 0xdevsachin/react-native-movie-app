import React, { useState } from 'react';

import {Text, View, Image, StyleSheet} from 'react-native';

import navIcon from '../../assets/icon.png'
const Header = () => {
  const date = new Date();
  const greet = date.getHours();
  const [hour, setHour] = useState(greet)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{ hour < 12 ? "Good Morning" : "Good Evening"}</Text>
        <Text style={{color : 'white', marginTop : 5}}>Welcome Back John!</Text>
      </View>
      <View >
        <Image style={styles.img} source={navIcon} />
      </View>
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
    container : {
        padding : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    img : {
        width : 50,
        height: 50,
    },
    text : {
        fontSize : 23,
        color :'white',
    }
})