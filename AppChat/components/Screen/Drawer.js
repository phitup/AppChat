import React, { Component } from 'react';
import { Image , StyleSheet} from 'react-native';
import { DrawerNavigator , DrawerItems } from 'react-navigation';
import Main from '../Main/Main';
import AccountInf from '../Main/Drawer/AccountInf';
import Logout from '../Main/Drawer/Logout';
import { Container , Header , Body , Content , Icon} from 'native-base';

const CustomDrawerContentComponent = (props) => (
    <Container>
      <Header style={{ height:200 }}>
        <Body>
          <Image style={styles.drawerImage} source={require('../images/imageUser.jpg')} />
        </Body>
      </Header>
      <Content>
      <DrawerItems {...props} />
    </Content>
    </Container>
    
)

export const SideMenu = DrawerNavigator({
  Main:{
    screen: Main
  },
  AccountInf:{
    screen: AccountInf
  },
  Logout:{
    screen: Logout
  }
},
  {
    initialRouteName: 'Main',
    drawerWidth: 230,
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent
    //contentComponent: props => <Menu />
  }
);

 export default SideMenu;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerImage:{
    height:150,
    width:150,
    borderRadius: 100,
    marginLeft: 25,
  }
});
