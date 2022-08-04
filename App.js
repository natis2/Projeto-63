import React, { Component } from 'react';
import { StyleSheet, View, Text, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
        {  <input
       style={StyleSheet.inputBox}
       onChangeText={text => {
        this.setState({
          text: text,
          isSearchPressed: false,
          word : "Loading...",
          lexicalCategory:'',
          examples:[],
          definition:""
        });
      }}
    
/>
    }
    
      </View>
    )
  }
}

