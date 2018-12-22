import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Form from './components/Form';
import Tabmenu from './components/Tabmenu';
import Anasayfa from './components/Anasayfa';
import Kamera from './components/Kamera';
import Oneriler from './components/Oneriler';
class Root extends Component {
   render() {
     return(
<Router>
  <Scene
  key='Root'>
    <Scene
    key='Form'
    component={Form}
    hideNavBar
    initial/>
    <Scene
    key='Tabmenu'
    component={Tabmenu}
    tabs={true}
    />
    </Scene>
</Router>
);
   }
}
export default Root;
