import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
   Dimensions,
   Image,

} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

 class Anasayfa extends Component {

  renderSection(text) {
   return(
     <View style={styles.section}>
     <Text  style={styles.section}> {text} </Text>
     </View>
   );
  }
  render() {
    return(
  <ImageBackground
  source={require('../img/bg.png')}
  style={{ width, height, alignItems: 'center',}}
  >
  <Image source={require('../img/logo.png')}/>


  <View style={styles.PickerMainViewStyle}>
   {this.renderSection('  Türkiye de ki her bir bireye sağlık kartı vererek onların bu kartlar aracılığı ile reçetelerinin dijital bir ortama aktarılması için gömülü sistemler ile bir proje yapılacaktır.Reçetelerin dijital platformlar üzerinden takip edilmesinin yanı sıra mobil bir proje ile kullanıcıları kullanacakları ilaçların kullanımı ve ilaçlar hakkında bilgilendirme yapılacaktır.  Bu şekilde yanlış ilaç kullanımının önüne geçilmesi hedeflenmiştir. ')}
   </View>



  </ImageBackground>


  );
}}

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
  section: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
  }
});

export default Anasayfa;
