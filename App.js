import React, { Component } from 'react';
import { View, Button, Alert, Text } from 'react-native';

export default class App extends Component {
  render(){
    return(
      <View style={{backgroundColor:"gold"}}>
      
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
            onPress={() => Alert.alert('The father of computing.')} />
            <Text style = {{marginTop:-110, marginLeft:40, color:"black", fontSize:23,}}
            >FAMOUS</Text>
            
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress={() => Alert.alert('The father of nation.')} />
            <Text style = {{marginTop:-200, marginLeft:-0, color:"black", fontSize:23,}}
            >PERSONALITIES</Text>
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
            onPress={() => Alert.alert('The first black president of South Africa. ')} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mother Teresa"  
            color = "green"
            //add code here to show alert box for Mother Teresa button
            onPress={() => Alert.alert('Saint Teresa of Calcutta. ')} 
             />
        </View>
      </View>
    )
  }
}