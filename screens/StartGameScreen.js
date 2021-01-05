import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card.js';


const StartGameScreen = props =>{
    const [enteredValue, setEnteredValue] = useState('')

    const resetInputHndler = () =>{
        setEnteredValue('')
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.header}>Start a new game</Text>
                <Card>
                <View style={styles.inputContainer}>
                    <Text></Text>
                    <TextInput
                     style={styles.textinput}
                     keyboardType = 'numeric'
                     maxLength={3}
                     value={enteredValue}
                     onChangeText={text => setEnteredValue(text)}
                     />
                    <View style={styles.buttonView}>
                        <Button title='reset' onPress={resetInputHndler}/>
                        <Button title='play'/>
                    </View>
                </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
        marginLeft:'40%',
        borderBottomColor:'grey',
        borderBottomWidth:2,
        textAlign:'center',
        width:40,
    }
});

export default StartGameScreen;