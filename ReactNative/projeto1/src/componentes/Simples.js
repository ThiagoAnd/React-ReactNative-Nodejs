import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Criando com função

//Colocando o parametro 'propriedade(props) podemos passar valores direto para dentro da função'
export default function(props) {
    return (
      
    <Text>{props.texto}</Text>
      
    )

}

