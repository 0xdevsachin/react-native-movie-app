import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/header/header';
import Poster from '../../components/poster/poster'
import requests from '../../requests'
import axios from 'axios';
import Genre from '../../components/Genre/genre';

const HomeScreen = ({ navigation }) => {
  const genere = ['Action', 'Anime', 'Comedy', 'Documentary', 'Horror', 'Romance', 'Netflix', 'TopRated']
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${requests.baseUrl}${requests.fetchTrending}`)
        .then(res => {
          setData(res.data.results);
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View>
          <Text style={styles.text}>Trending Now</Text>
        </View>
        <View style={styles.poster}>
          <ScrollView horizontal={true}>
            {data.map(item => {
              return (
                <Poster
                  title={item.title}
                  key={item.id}
                  link={`${requests.imageUrl}${item.poster_path}`}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.genere}>
          <Text style={styles.text}>Best Genre</Text>
          <ScrollView horizontal={true}>
            {genere.map(item => (
              <Genre key={item} navigation={navigation} title={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b212f',
    height: 100,
    flex: 1,
  },
  poster: {
    height: 400,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  text: {
    color: '#fff',
    paddingLeft: 20,
    fontSize: 25,
    marginTop: 15,
  },
  genere: {
    marginBottom: 20,
  },
});
