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
class Oneriler extends Component {
  constructor(props) {

    super(props)

    this.state={

     Rfide : '',
     Tce : '',
     Ade : '',
     Soyade : '',
     Yase : '',
     Cinsiyete : '',
     Alerjie : '',
     Ilace:'',
    }
  }

componentDidMount() {
  fetch('http://192.168.1.40:85/api/submit_user_info.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({

           // Getting the id.
           rfid: this.props.navigation.state.params.TextInput

         })

       }).then((response) => response.json())
             .then((responseJson) => {

               this.setState({

                 Rfide : responseJson[0].rfid,
                 Tce : responseJson[0].tc,
                 Ade : responseJson[0].ad,
                 Soyade : responseJson[0].soyad,
                 Yase : responseJson[0].yas,
                 Cinsiyete : responseJson[0].cinsiyet,
                 Alerjie : responseJson[0].alerji,
                 Ilace : responseJson[0].ilac

               })

             }).catch((error) => {
               console.error(error);
             });

  }


  ListViewItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
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
     <Provider store={createStore(reducers)}>
     <View style={styles.MainContainer}>



     <View style={{flex:1, flexDirection: 'column'}} >

      <TextInput style={styles.textViewContainer} > {'Rfid = ' + this.state.Rfide} </TextInput>

      <Text style={styles.textViewContainer} > {'Tc = ' + this.state.Tce} </Text>

      <Text style={styles.textViewContainer} > {'Ad = ' + this.state.Ade} </Text>

      <Text style={styles.textViewContainer} > {'Soyad = ' + this.state.Soyade} </Text>

      <Text style={styles.textViewContainer} > {'Yaş = ' + this.state.Yase} </Text>
      <Text style={styles.textViewContainer} > {'Cinsiyet = ' + this.state.Cinsiyete} </Text>

      <Text style={styles.textViewContainer} > {'Alerji = ' + this.state.Alerjie} </Text>

      <Text style={styles.textViewContainer} > {'İlaç = ' + this.state.Ilace} </Text>


     </View>

           </View>
     </Provider>
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

export default Oneriler;
