import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import requests from '../../requests';
function Movie({route}) {
  const {title, img, content, release, vote} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={{uri: `${requests.imageUrl}${img}`}}
            resizeMode={'center'}
          />
        </View>
        <View style={styles.view}>
          <Text style={{fontSize: 25, color: '#fff', textAlign: 'center'}}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.text}>Release : {release}</Text>
            <Text style={styles.text}>Vote : {vote} / 10</Text>
          </View>
        </View>
        <View>
          <Text style={styles.content}>{content}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Movie;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b212f',
    height: 100,
    flex: 1,
    paddingTop: 20,
  },
  image: {
    height: 350,
  },
  view: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
  },
  text: {
    marginTop: 30,
    color: 'white',
  },
  content: {
    padding: 20,
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    lineHeight: 40,
  },
});
