import React , { Component } from 'react';
import {View , Text , TouchableOpacity} from 'react-native';


export default class AccountInf extends Component {

    static navigationOptions = {
        title: 'Account Information'
    };

  render(){

    return(
        <View style={{flex:1 , backgroundColor:'lightgreen' , justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}}>
          <Text>Account Information</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
