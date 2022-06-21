import React, { useState } from 'react';
import { Text, Animated, View, StyleSheet, Image } from 'react-native';
import Style from './Styles/Style'

const FinancialSolution = ({ navigation }) => {
  const [largura] = useState(new Animated.Value(0));
  const [altura] = useState(new Animated.Value(30));
  const [opacidade] = useState(new Animated.Value(0));
  const [opacidade2] = useState(new Animated.Value(0));

  Animated.sequence([
        Animated.timing(largura,{toValue:300,duration:2000}),
        Animated.timing(altura,{toValue:300,duration: 2000}),
        Animated.timing(opacidade,{toValue: 1,duration:2000}),
        Animated.timing(opacidade2,{toValue: 1,duration:2000})]).start();

  return (
    <View style={Style.teste}>
      <Animated.View style={{ opacity: opacidade, textAlign: 'center' }}>
        <Animated.Text style={Style.Text}>
          Seja bem-vindo Controle De Finanças APP
        </Animated.Text>
        <br />
      </Animated.View>
      <Animated.View style={{ height: altura, width: largura }}>
        <Animated.Image
          source={require('../assets/Contabilidade.png')}
          style={{ height: altura, width: largura }}
        />
      </Animated.View>
      <br />
      <Animated.View style={{ opacity: opacidade2, textAlign: 'center' }}>
        <Animated.Text style={Style.Text2}>
          Aqui seu dinheiro rende
        </Animated.Text>
        <br />
      </Animated.View>
      <br />
      <br />
    </View>
  );
};

export default FinancialSolution;
