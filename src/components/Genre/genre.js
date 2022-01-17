import React from "react";

import { Text, View, StyleSheet } from "react-native";

const Genre = ({title, navigation}) =>{
    return (
        <View onTouchEnd={() => {
            navigation.navigate('Genere', {
                title : title,
                navigation : navigation
            })
        }} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}


export default Genre;


const styles = StyleSheet.create({
    container : {
        minWidth : 160,
        height : 100,
        backgroundColor : '#306eb7',
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 20,
        borderRadius : 12,
        // marginBottom : 12,
        margin : 12
    },
    text : {
        color : '#fff',
        fontSize : 20
    }
})