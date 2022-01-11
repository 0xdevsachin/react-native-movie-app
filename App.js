import React, {useEffect, useState} from "react";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "./src/components/header/header";
import Poster from "./src/components/poster/poster";
import requests from "./src/requests";
import axios from "axios";
const App = () =>{
  const[data, setData] = useState([])
  useEffect(() =>{
     const fetchData = async () =>{
      await axios.get(`${requests.baseUrl}${requests.fetchTrending}`)
      .then((res) =>{
        setData(res.data.results)
        return;
      })
      .catch((err) => console.log(err))
     }
     fetchData()
  }, [])
  return(
    <View style={styles.container}>
      <ScrollView>
      <Header />
      <View>
        <Text style={styles.text}>Trending Now</Text>
      </View>
     <View style={styles.poster}>
       <ScrollView horizontal={true}>
     {
       data.map(item =>{
        //  console.log(`https://image.tmdb.org/t/p/original/${item.backdrop_path}`)
         return <Poster key={item.title} link={`${requests.imageUrl}${item.poster_path}`} />
       })
     }
     </ScrollView>
     </View>
     <Poster />
    </ScrollView>
    </View>
  )
}


export default App;

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#1b212f',
    height : 100,
    flex : 1
  },
  poster: {
    height : 400,
    flexDirection :'row',
    overflow : 'scroll',
  },
  text :{
    color : '#fff',
    paddingLeft : 20,
    fontSize : 25,
    marginTop : 15
  }
})