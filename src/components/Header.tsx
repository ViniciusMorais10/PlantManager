import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
}
from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import userImg from '../assets/Profile.png';

export function Header(){
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.greeting}>Olá, </Text>
        <Text style={styles.username}>Vinicius</Text>
      </View>

      <Image source={userImg} style={styles.img}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    paddingVertical: 30
  },
  img:{
    width: 70,
    height: 70,
    borderRadius: 40
  },

  greeting:{
    fontFamily: fonts.text,
    fontSize: 32
  },

  username: {
    fontFamily: fonts.heading,
    fontSize: 32,
    color: colors.heading,
    lineHeight: 38
  }
  
})