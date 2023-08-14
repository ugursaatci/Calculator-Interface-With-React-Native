import React, {Component} from 'react';
import { 
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  image, 
  Image
  } from 'react-native';
  

export default class App extends Component{
  
  render(){
    
    return(
        <View style={{backgroundColor:'black', flex:1}}>
            <View style={style.menu_bar}>
                <TouchableOpacity><Image source={require('./images/ust_menu_1.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_2.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_3.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_4.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_5.png')}></Image></TouchableOpacity>
            </View>
            <View style={style.result_screen}>
              <View style={{flex:50, justifyContent:'flex-end',alignItems:'flex-end'}}><Text style={{color:'white', fontSize:30}}>0</Text></View>
              <View style={{flex:1,backgroundColor:'#5e5e5e'}}></View>
            </View>
            <View style={style.keyboard}>
            <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
            <TouchableOpacity><Image source={require('./images/keyboard_1.png')}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/keyboard_2.png')}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/keyboard_3.png')}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/keyboard_4.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity><Image source={require('./images/keyboard_5.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_6.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_7.png')}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/keyboard_8.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity><Image source={require('./images/keyboard_9.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_10.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_11.png')}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/keyboard_12.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity><Image source={require('./images/keyboard_13.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_14.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_15.png')}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/keyboard_16.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity><Image source={require('./images/keyboard_17.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_18.png')}></Image></TouchableOpacity>
              <TouchableOpacity><Image source={require('./images/keyboard_19.png')}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={require('./images/keyboard_20.png')}></Image></TouchableOpacity>
              </View>
              
            </View>
              
        </View>
    )
  }
}

const style=StyleSheet.create({
  menu_bar:{fontFamily:'times new roman', flexDirection:'row', justifyContent:'space-around', marginTop:10},
  result_screen:{flex:4},
  keyboard:{flex:5},
  text:{color:'white'}
})


