import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Menu } from 'react-native-paper'



class HomeScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
    )

  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
    </View>
    )

  }
}
class HistoryScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>History screen</Text>
    </View>
    )

  }
}


class CartScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>Cart screen</Text>
    </View>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

const TabNavigator = createMaterialBottomTabNavigator({
Home: {
  screen:HomeScreen
},
Profile: {
  screen:ProfileScreen
},
Hisory: {
  screen:HistoryScreen
},
Cart: {
  screen:CartScreen
},
initialRouteName="Home",
activeColor="#f0edf6",
inactiveColor="#3e2465",
barStyle={ backgroundColor: '#694fad' }

}),

export default createAppContainer(TabNavigator);