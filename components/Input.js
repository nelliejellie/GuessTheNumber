import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


const Input = props =>{
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:2,
    }
})
export default Input;

//two different style components were added to the jsx element
//the spread props in the Textinput allows you use the props of the textinput when expotrting the component