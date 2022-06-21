import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FinancialSolution from './components/FinancialSolution';
import Lancamentos from './components/Lancamentos';
import SaidaDinheiro from './components/SaidaDinheiro'
import Balanco from './components/Balanco'

const drawer =  createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <drawer.Navigator>
        <drawer.Screen name="Finance Control Home" component={FinancialSolution}/>
        <drawer.Screen name="Lançamentos" component={Lancamentos} />
        <drawer.Screen name="Saida de Dinheiro" component={SaidaDinheiro} />
        <drawer.Screen name="Balanco" component={Balanco} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;