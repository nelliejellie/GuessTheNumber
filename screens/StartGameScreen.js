import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card.js';


const StartGameScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.header}>Start a new game</Text>
            <Card>
            <View style={styles.inputContainer}>
                <Text></Text>
                <TextInput style={styles.textinput} keyboardType = 'numeric'/>
                <View style={styles.buttonView}>
                    <Button title='reset'/>
                    <Button title='play'/>
                </View>
            </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems:'center',
        
    },
    header:{
        fontSize: 20,
    },
    inputContainer:{
        height:100,
    },
    buttonView:{
        flex:1,
        flexDirection:'row',
        padding: 10,
        justifyContent:"space-between",
    },
    textinput:{
        borderColor:"black",
        borderWidth:2,
    }
});

export default StartGameScreen;