import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card.js';


const StartGameScreen = props =>{
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setCollectedNumber] = useState('')

    let confirmedText;
    const resetInputHandler = () =>{
        setEnteredValue('')
        
    }
    const confirmInputHandler = () =>{
        let confirmedValue = parseInt(enteredValue)
        if (confirmedValue > 100 || confirmedValue <= 0 || isNaN(confirmedValue)){
            setEnteredValue('')
            setConfirmed(false)
            Keyboard.dismiss()
        }else{
        setConfirmed(true)
        setCollectedNumber(confirmedValue)
        setEnteredValue('')
        Keyboard.dismiss()
        }
        
    }
    
    if (confirmed){
        confirmedText = <Card>
                            <View >
                                <Text style={styles.selectedText}>value: {selectedNumber}</Text>
                                <Button title='Start Game' color='green'/>
                            </View>
                        </Card>
    }else{
        confirmedText = <Text>the value entered is not within range...it must be between 1 and 100</Text>
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
                        <Button title='reset' onPress={resetInputHandler}/>
                        <Button title='play' onPress={confirmInputHandler}/>
                    </View>
                </View>
                </Card>
                {confirmedText}
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
    },
    selectedText:{
        textAlign:'center',
    },
    
});

export default StartGameScreen;