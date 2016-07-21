'use strict'
import React,{Component} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  BackAndroid,
} from 'react-native'

import Util from './Util';

export default class TitleBar extends Component{

   render(){
     return(
       <View>
       <View style={styles.titleBar}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:60}}
        onPress={()=>BackAndroid.exitApp()}>
        <Image resizeMode='contain' style={{width:20,height:20,}}
        source={require('image!titlebar_back_normal')}/>
        </TouchableOpacity>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={{color:'#fff',fontSize:16}}>设置</Text>
        </View>
        <View style={{width:20,height:20}}/>
       </View>
       </View>
     );
   }
}

const styles=StyleSheet.create({
  titleBar:{
    flex:1,
    flexDirection:'row',
    height:Platform.OS=='android'?50:66,
    paddingTop:Platform.OS=='android'?0:15,
    alignItems:'center',
    backgroundColor:'#1a191f',
  },


});
