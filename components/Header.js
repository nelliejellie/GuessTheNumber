import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a function header and pass props to it
const Header = props =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.Title}</Text>
        </View>
    )
}

// for styling 
const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:80,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:30,
    backgroundColor:'#f7287b'
  },
  headerTitle: {
      fontSize:28,
  }
});

// exporting the header function
export default Header;