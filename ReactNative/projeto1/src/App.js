import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
//Criando com função
export default function() {
    return (
      <View style={styles.container}>
        <Simples texto='Componente Simples'/>
        <Text style={styles.f20}>App do Thiago</Text>
      </View>
    )

}

//Criando com Classe
/*
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>App do Thiago</Text>
      </View>
    )

  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 40
  }
})