import React, {useEffect, useState} from "react";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "./src/components/header/header";
import Poster from "./src/components/poster/poster";
import requests from "./src/requests";
import axios from "axios";
import Genere from "./src/components/Genere/genere";
const App = () =>{
  const [genere, setGenere] = useState([])
  // const genere = ['Action', 'Comedy', 'Horror', 'Romance', 'Documentaries']
  const[data, setData] = useState([])
  useEffect(() =>{
     const fetchData = async () =>{
      await axios.get(`${requests.baseUrl}${requests.fetchTrending}`)
      .then((res) =>{
        setData(res.data.results)
      })
      .catch((err) => console.log(err))
      await axios.get(`${requests.baseUrl}${requests.genereList}`)
      .then((res) =>{
        setGenere(res.data.genres)
      })
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
         return <Poster title={item.title} key={item.id} link={`${requests.imageUrl}${item.poster_path}`} />
       })
     }
     </ScrollView>
     </View>
     <View style={styles.genere}>
       <Text style={styles.text}>Best Genre</Text>
       <ScrollView horizontal={true}>
         {
           genere.map(item => <Genere key={item.name} title={item.name} /> ) 
         }
       </ScrollView>
     </View>
     
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
  },
  genere : {
    marginBottom : 20
  }
})