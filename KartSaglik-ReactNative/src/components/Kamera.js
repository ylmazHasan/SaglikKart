import React, { Component } from 'react';
import {StyleSheet,Text,View,ImageBackground,Dimensions,TextInput,AppRegistry,ActivityIndicator,ListView,Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-vector-icons';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { rfidchanged } from  '../actions';
import firebase from '@firebase/app';
 import { createStore } from 'redux';
import reducers from '../reducers';
const { width, height } = Dimensions.get('window');





class Kamera extends Component {

   hastaClick(){
     Actions.Oneriler({ hasta: this.props.rfid});
   }

  constructor(props) {

     super(props);

     this.state = {

       isLoading: true,

     }

   }

 GetItem (rfid) {

   Alert.alert(rfid);

 }
 componentDidMount(){

   return fetch('http://192.168.1.40:85/api/submit_user_info.php')
   .then((response) => response.json())
   .then((responseJson) => {
     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
       isLoading: false,
       dataSource: ds.cloneWithRows(responseJson),
     }, function() {
       // In this block you can do something with new state.
     });
   })
   .catch((error) => {
     console.error(error);
   });

 }

   ListViewItemSeparator = () => {
     return (
       <View
         style={{
           height: 2,
           width: "100%",
           backgroundColor: "#000",
         }}
       />
     );
   }

  render() {
    if (this.state.isLoading) {
         return (
           <View style={{flex: 1, paddingTop: 20}}>
             <ActivityIndicator />
           </View>
         );
       }
  return (

    <View style={styles.MainContainer}>

   <ListView

     dataSource={this.state.dataSource}

     renderSeparator= {this.ListViewItemSeparator}

     enableEmptySections = {true}

     renderRow={(rowData) => <TextInput style={styles.rowViewContainer}
     onPress={this.GetItem.bind(this, rowData.rfid)}>{rowData.rfid}</TextInput>}

   />

 </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10

},

   rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      },
      textViewContainer: {

  padding:5,
  fontSize: 20,
  color: '#000',
 }

});

export default Kamera;
