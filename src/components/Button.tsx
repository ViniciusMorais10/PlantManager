import React from "react";
import { StyleSheet, TouchableOpacity, Text,TouchableOpacityProps} from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;

}

export function Button({ title, ...rest }: ButtonProps){
  return(

    <TouchableOpacity style={styles.container} activeOpacity={0.6} {...rest}> 
      <Text style ={styles.text}>
        { title }
      </Text>

    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 16
  },

  text: {
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.white

  }

});