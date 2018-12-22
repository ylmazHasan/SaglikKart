
import React, { Component } from 'react';
import { Text, StyleSheet,PixelRatio, View } from 'react-native';
import { Router, Scene, NavigationDrawer,DrawerMenu } from 'react-native-router-flux';

import Anasayfa from './Anasayfa';
import Kamera from './Kamera';
import Oneriler from './Oneriler';
import  Icon  from 'react-native-vector-icons/FontAwesome';

// Simple component to render something in place of icon
class TabIcon extends Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "home"} size={25}/>
        <Text style={{color: color, fontSize: 2}}>{this.props.title}</Text>
      </View>
    );
  }
}
class TabIcon2 extends Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "camera"} size={25}/>
        <Text style={{color: color, fontSize: 2}}>{this.props.title}</Text>
      </View>
    );
  }
}
class TabIcon3 extends Component {
  render() {
    var color = this.props.selected ? '#00f240' : '#301c2a';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon style={{color: color}} name={this.props.iconName || "star"} size={25}/>
        <Text style={{color: color, fontSize: 2}}>{this.props.title}</Text>
      </View>
    );
  }
}

const Tabmenu = () => {
  return (
    <Router hideNavBar={true}>
      <Scene key="root" hideNavBar >
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={styles.tabBar}

        >

          <Scene key="Anasayfa"  icon={TabIcon} >
            <Scene
              key="Anasayfa"
              component={Anasayfa}
              title="Anasayfa"
              hideNavBar
              initial
            />

          </Scene>

          <Scene key="Kamera" icon={TabIcon2}>
            <Scene
              key="Kamera"
              component={Kamera}
              title="Kamera"
              hideNavBar
            />


          </Scene>

          <Scene key="Oneriler" icon={TabIcon3}>
            <Scene
              key="Oneriler"
              component={Oneriler}
              title="Oneriler"
              hideNavBar
            />

          </Scene>
        </Scene>


      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({

  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: 'ghostwhite',
    opacity: 0.98
  },

});

export default Tabmenu;
