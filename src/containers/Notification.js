import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// This component should be used to show a temporary message between transition
// to another view, for example. 'Thank you, your message is being saved'

// Bindings:
// content - a text string message to display
// duration - how long to show the message
// forwardTo - the url the app should navigate to once the timer has ended

class Notification extends React.Component {
  render(props) {
    return (
      <View style={styles.container}>
        <Text>{props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Notification;
