import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default class SignInView extends Component {
    state = { name : '' }

    onChangeText = name => this.setState({name});

    onPress = () => {
        this.props.navigation.navigate('Chat', { name: this.state.name });
      }

  render() {
    return <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput 
            onChangeText={this.onChangeText}
            style={styles.nameInput}
            placeHolder="Enter your name"
            value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  }
}

const offset = 24;
const styles = StyleSheet.create({
    nameInput : {
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderWidth: 1
    },
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
      },
      buttonText: {
        marginLeft: offset,
        fontSize: offset,
      },
});
