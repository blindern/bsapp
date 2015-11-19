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
        <View style={styles.heading}>
          <Text style={styles.headingtext}>
            BS-app
          </Text>
        </View>
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
  heading: {
    marginBottom: 5,

  },
  headingtext: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 40,
  },
})

AppRegistry.registerComponent('bsapp', () => bsapp)
