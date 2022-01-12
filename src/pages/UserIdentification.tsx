import React, { useState } from "react";
import { 
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native';
import { Button } from "../components/Button";

import { useNavigation } from "@react-navigation/core";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  // !! duas interrogações verifico true/false do preenchimento do campo
  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputchange(value:string){
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit(){
    navigation.navigate('Confirmation');  
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
            <Text style={styles.emoji}>
              { isFilled ? '😁' : '😊' }
            </Text>
            <Text style={styles.title}>
              Como podemos {'\n'} chamar você?
            </Text>
            </View>
            <TextInput 
            style={[
              styles.input,
              (isFocused  || isFilled) && {borderColor: colors.green}
            ]} 
            placeholder="Seu nome"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputchange}
            />

            <View style={styles.footer}>
            <Button
              title='Confirmar'
              onPress= {handleSubmit}              
            />
            </View>
          </View>
        </View>
        
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  content:{
    flex: 1,
    width: '100%'
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54
  },

  header :{
    alignItems: 'center'
  },

  emoji: {
    fontSize: 48
  },

  input:{
    borderBottomWidth: 1,
    borderColor: colors.gray,
    width: '100%',
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    marginTop: 10
  },

  title:{
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    textAlign: 'center',
    lineHeight:32,
    marginTop: 20
  },

  footer: {
    width:'80%',
    marginTop: 40,

  }

})