import React from "react";

import { Text, View, StyleSheet, Image } from "react-native";

const Poster = ({ link }) =>{
    return (
        <View style={style.container}>
            <Image 
             style={style.image}
             source={{uri: link}}
             resizeMode={'cover'}
             />
        </View>
    )
}

export default Poster

const style = StyleSheet.create({
    image : {
        height : 350,
        minWidth : 250,
    },
    container :{
        paddingLeft : 20,
        paddingRight : 20,
        width : 300,
        justifyContent : 'space-around',
        alignItems : 'center'
    }
})