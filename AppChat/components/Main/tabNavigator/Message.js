import React , { Component } from 'react';
import {View , Text , TouchableOpacity} from 'react-native';
import mainStyle from '../../styles/mainStyle';

export default class Message extends Component {

  render(){

    return(
        <View style={mainStyle.container}>
            <Text style={mainStyle.text}>Message</Text>
        </View>
    );
  }
}
