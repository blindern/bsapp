/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  } = React
const Matmeny = require('./src/Matmeny')

var bsapp = React.createClass({
  getInitialState() {
    return {
      url: 'unknown'
    }
  },

  render: function () {
    return (
      <View style={styles.container}>
        <Matmeny />
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('bsapp', () => bsapp)
