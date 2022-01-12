import React from 'react';

import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Feather } from '@expo/vector-icons';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { UserIdentification } from './UserIdentification';


export function Welcome(){
  const navigation = useNavigation();
  function handleStart(){
    navigation.navigate('UserIdentification');
    
  }

 return(
  <SafeAreaView style={styles.container}>
    <View style={styles.wrapper} >
    <Text style={styles.title}>
      Gerencie {'\n'} suas plantas de {'\n'} forma fácil
    </Text>

    <Image 
      source={wateringImg}
      style={styles.image} 
      resizeMode='contain'
      />
    

    <Text style={styles.subTitle}>
      Não esqueça mais de regar suas plantas.{'\n'}
      Nós cuidamos de lembrar você{'\n'}
      sempre que precisar.
    </Text>

    <TouchableOpacity 
      style={styles.button} 
      activeOpacity={0.6}
      onPress={handleStart}
    >
    
        <Feather name='chevron-right' style={styles.IconButton} />

    </TouchableOpacity>
    </View>
  </SafeAreaView>
 ) 
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },

  wrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  title: {
    fontSize: 32,
    color: colors.heading,
    textAlign: 'center',
    marginTop:38,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontFamily: fonts.heading,
    lineHeight: 38
  },

  image: {
    
    height: Dimensions.get('window').width * 0.7
  },

  subTitle: {
    fontSize: 20,
    color: colors.heading,
    textAlign: 'center',
    marginBottom:15,
    fontFamily: fonts.text
  },

  button :{
    backgroundColor: colors.green,
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },

  IconButton: {
    color: colors.white,
    fontSize: 32,
  }
});