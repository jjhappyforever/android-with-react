/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid,
} from 'react-native';

import TitleBar from './TitleBar';
import Util from './Util';

export default class Setting extends Component {


  componentWillMount(){
    BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid.bind(this));
  }

  componentWillUnmount(){
    BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid.bind(this));
  }


  onBackAndroid(){
   return false;
  }

  render() {
    return (
      <View style={styles.container}>
      <TitleBar/>
      <View style={{paddingLeft:20,paddingRight:20,}}>

      <View style={{height:50,justifyContent:'center',borderBottomColor:'#ddd',borderBottomWidth:Util.pixel}}>
      <Text>修改绑定手机号</Text>
      </View>

      <View style={{height:50,justifyContent:'center',borderBottomColor:'#ddd',borderBottomWidth:Util.pixel}}>
      <Text>修改密码</Text>
      </View>

      <View style={{height:50,justifyContent:'center',borderBottomColor:'#ddd',borderBottomWidth:Util.pixel}}>
      <Text>清理缓存</Text>
      </View>

      <View style={{backgroundColor:'#1a191f',height:50,marginTop:100,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#fff'}}>退出当前账号</Text>
      </View>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
