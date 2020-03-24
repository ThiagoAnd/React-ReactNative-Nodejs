import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Padrao from '../estilo/Padrao'
//Criando com função

//Colocando o parametro 'propriedade(props) podemos passar valores direto para dentro da função'
/*
export default function(props) {
    return (
      
    <Text>{props.texto}</Text>
      
    )

}
*/
//Fazendo tudo agora com arrow function, como é um parametro só pode tirar o parenteses, e o return fica implicito pode tirar
export default props =>  <Text style={Padrao.titulo}>Arrow function: {props.texto}</Text>