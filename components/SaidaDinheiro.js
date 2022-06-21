import React, { useState } from 'react';
import {
  Text,
  Animated,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from 'react-native';
import Style2 from './Styles/Style2';

const Lancamentos = (props) => {
  const [origem, setOrigem] = React.useState();
  const [data, setData] = React.useState();
  const [valor, setValor] = React.useState(0);
  const [saldo, setSaldo] = React.useState(0);
  const [rotacao] = useState(new Animated.Value(0));

  let rotacaoInterpolada = rotacao.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '360deg'],
  });

  Animated.timing(rotacao, { toValue: 90, duration: 2500 }).start();

  const valorTotal = () => {
    if (!origem) {
      alert('preencha os campos');
    }
    if (!data) {
      alert('preencha os campos');
    }
    if (!valor) {
      alert('preencha os campos');
    } else {
      setSaldo(parseInt(valor) + parseInt(saldo));
      alert('Dados Gravados com sucesso!!');
    }
  };

  return (
    <View style={Style2.container}>
      <Animated.Text
        style={{
          fontSize: 22,
          margin: 70,
          fontWeight: 'bold',
          transform: [{ rotate: rotacaoInterpolada }],
        }}>
        Saída de Dinheiro</Animated.Text>

      <Text style={styles.texto}>Origem:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setOrigem(text)}
        value={origem}
        placeholder="Origem"
      />
      <Text style={styles.texto}>Data:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setData(text)}
        value={data}
        placeholder="Data"
      />

      <Text style={styles.texto}>Valor:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValor(text)}
        value={valor}
        keyboardType="numeric"
      />

      <Text style={styles.texto}>Seu Saldo:</Text>
      <View>
        <Text>{saldo}</Text>
      </View>

      <br />
      <View>
        <Button
          title="Gravar"
          color="red"
          style={styles.botao}
          onPress={valorTotal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 80,
  },
  texto: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginEnd:60
  },
  botao: {
    borderRadius: 40,
  },
});

export default Lancamentos;
