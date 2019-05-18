import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../components/Fire';
import Example from '../components/Example';

export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat',
  });

  state = {
    messages: [],
  };

  // 1.
componentDidMount() {
  Fire.shared.on(message =>
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }))
  );
}
// 2.
componentWillUnmount() {
Fire.shared.off();
}

get user() {
  // Return our name and our UID for GiftedChat to parse
  return {
    // name: this.props.navigation.state.params.name,
    name: 'Thang',
    _id: Fire.shared.uid,
  };
}

  render() {
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
