import React, { useEffect, useState } from 'react';

import { 
  View,
  Text,
  StyleSheet,
  FlatList
 }
from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';

import { Header } from '../components/Header';
import api from '../services/api';

import colors from "../styles/colors";

import fonts from "../styles/fonts";

interface EnviromentProps {
  key: string;
  title: string;
}


export function PlantSelect(){
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>();



  useEffect(()=> {
    async function fecthEnviroment(){
      const { data } = await api.get('plants_enviroment');
      setEnviroments(data);
    }

    fecthEnviroment();

  },[]);

  const [buttonActive, setbuttonActive] = React.useState<Number>();

  return (
    <View style = {styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
        data={enviroments}
        renderItem={ ({item, index}) => (
          <EnviromentButton 
            title={item.title} onPress={() => setbuttonActive(index)} active = {buttonActive == index ? true : false}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle= {styles.enviromentList}
        >

        </FlatList>
      </View>
    </View>

  )}

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 17, 
      fontFamily: fonts.heading,
      color: colors.heading,
      lineHeight: 20,
      marginTop: 15

    },
    subtitle: {
      fontSize: 17,
      fontFamily: fonts.text
    },
    header: {
      paddingHorizontal: 30
    },
    enviromentList: {
       height: 40,
       justifyContent: 'center',
       paddingBottom: 5,
       marginLeft: 32 ,
       paddingRight: 40,
       marginVertical:32
       
    }
  });