/*import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}


class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
*/
import React from 'react';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';


class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{padding: 10, fontSize: 20}}>
          Private Key Here!
        </Text>
        <TextInput
          style={{width: '90%', padding: 10, fontSize: 20}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button title="Log IN" onPress={() => navigate('NFCtime') } />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class NFCtimeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{padding: 10, fontSize: 20}}>
          kfjlskalf;djksla;fjkdl;
        </Text>

      </View>
    );
  }
}

class APICallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{padding: 10, fontSize: 20}}>
          kfjlskalf;djksla;fjkdl;
        </Text>

      </View>
    );
  }
}

const LocalArk = StackNavigator({
  Login: { screen: LoginScreen },
  NFCtime: { screen: NFCtimeScreen },
  APICall: { screen: APICallScreen },

});


export default class App extends React.Component {
  render() {
    return <LocalArk />;
  }
}
