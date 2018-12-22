import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import { Actions} from 'react-native-router-flux';
import Button from '../commons/Button';
const { width, height } = Dimensions.get('window');
class Form extends Component {
  renderSection(text) {
   return(
     <View style={styles.section}>
     <Text> {text} </Text>
     <Image source={require('../img/ok.png')}/>
     </View>
   );
  }
  render() {
    return(
 <ImageBackground
 source={require('../img/bg.png')}
 style={{ width, height, alignItems: 'center', justifyContent: 'center'}}
 >

 <Image source={require('../img/logo.png')}/>

<View style={styles.PickerMainViewStyle}>
   {this.renderSection('Sağlık Kart Uygulamasını Tanıyın')}
   </View>

  <Button
  onPress={() => Actions.Tabmenu()}
  text='Giriş Yap'/>


  </ImageBackground>

    );
  }
}
const styles = {
  section: {
    marginTop:20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: width*0.65,
    height: height*0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10

  }
};
export default Form;
