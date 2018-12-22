import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');
class Button extends Component {
  render() {
    return(

       <TouchableOpacity style={{
          width: width*0.71,
          height: height*0.07,
          backgroundColor: '#0a3d62',
          marginTop: 40,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => this.props.onPress()}>
        <Text style={{color: 'white'}}>{this.props.text}</Text>

      </TouchableOpacity>
    );
  }
}
const styles = {
};

export default Button;
