'use strict'

var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  } = React

module.exports = React.createClass({
  getInitialState() {
    return {
      days: null
    }
  },

  componentDidMount() {
    this.fetchData()
  },

  getMatmenyUrl() {
    function getDateString(date) {
      return date.getFullYear() + '-' + (date.getMonth() < 10 ? '0' : '') + date.getMonth() + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
    }

    let days = 4

    let from = new Date()
    from.setHours(6)
    let to = new Date(from.getTime() + (days - 1) * 86400000)

    return 'https://foreningenbs.no/intern/api/matmeny?from=' + getDateString(from) + '&to=' + getDateString(to)
  },

  fetchData() {
    fetch(this.getMatmenyUrl())
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          days: responseData
        })
      })
  },

  render() {
    if (!this.state.days) {
      return this.renderLoading()
    } else {
      return this.renderList()
    }
  },

  renderLoading() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Matmeny
        </Text>
        <Text style={styles.nodata}>
          Henter inn data ..
        </Text>
      </View>
    )
  },

  renderList() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Matmeny
        </Text>
        {this.state.days.map(this.renderDay)}
      </View>
    )
  },

  renderDay(day) {
    return (
      <View style={styles.day}>
        <Text>
          {day.day}
        </Text>
        <View style={styles.dishes}>
          {day.dishes.map(dish => (
            <Text style={styles.dish}>
              {dish}
            </Text>
          ))}
        </View>
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
  title: {
    fontSize: 20,
  },
  nodata: {},
  day: {
    marginTop: 10,
  },
  dishes: {},
  dish: {}
})
