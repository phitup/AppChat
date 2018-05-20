import React , { Component } from 'react';
import {View , Text , TouchableOpacity} from 'react-native';
import AccountInf from './AccountInf';

export default class Logout extends Component {

  static navigationOptions = {
    title: 'Log Out'
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
        <View style={{flex:1 , backgroundColor:'lightpink' , justifyContent:'center' , alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{navigate('AccountInf')}}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
