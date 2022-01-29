import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Button } from "../components/Button";


export function Confirmation(){
  
  const navigation = useNavigation();
  
  function handleMoveOn(){
    navigation.navigate('PlantSelect');

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        
        <Text style={styles.emoji}>😁</Text>
        
        <Text style={styles.title}>Prontinho</Text>
        
        <Text style={styles.subtitle}>Agora vamos começar a cuidar das suas{'\n'} plantinhas com muito cuidado</Text>

        <View style={styles.footer}>
        <Button 
          title='Começar'
          onPress={handleMoveOn}
        />
      </View>
      </View>
      
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  content: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30

    
  },

  emoji: {
    fontSize: 78
  },

  title: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.heading,
    textAlign: 'center',
    lineHeight: 38,
    marginTop: 15
    
  },

  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    paddingVertical: 20,
    color: colors.heading,
    textAlign: 'center'
  },
  
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20

    
  }

})