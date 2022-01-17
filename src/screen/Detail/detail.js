import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import requests from '../../requests';
import axios from 'axios';
function Detail({route, navigation}) {
  var genereList = {
    Action: requests.fetchActionMovies,
    Comedy: requests.fetchComedyMovies,
    Documentary: requests.fetchDocumentaries,
    Horror: requests.fetchHorrorMovies,
    Romance: requests.fetchRomanceMovies,
    Netflix: requests.fetchNetflixOriginals,
    TopRated: requests.fetchTopRated,
  };
  const [data, setData] = useState([]);
  const title = route.params.title;
  const url = `${requests.baseUrl}${genereList[title]}`;
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}`)
        .then(res => {
          setData(res.data.results);
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <ScrollView>
        <View>
          {data.map(item => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Movie', {
                  img : item.poster_path,
                  title : !item.original_title ? item.name : item.original_title,
                  content : item.overview,
                  release : item.release_date,
                  vote : item.vote_average
              })} key={item.id} style={styles.view}>
                <Text style={{color : '#fff'}}>
                  {!item.original_title ? item.name : item.original_title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b212f',
    height: 100,
    flex: 1,
    paddingLeft: 20,
    paddingRight : 20,
    paddingTop: 10,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  view: {
    marginBottom: 20,
    height : 80,
    paddingLeft : 10,
    paddingTop : 12,
    backgroundColor : '#306eb7',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 8
  },
});
