import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Notification from './src/containers/Notification';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Notification this.content="Hello" />*/}
        <Text>Test </Text>
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
