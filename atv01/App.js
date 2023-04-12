import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState('');

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const media = (n1 + n2) / 2;
    setMedia(media.toFixed(2));
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite a primeira nota"
        value={nota1}
        onChangeText={setNota1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite a segunda nota"
        value={nota2}
        onChangeText={setNota2}
      />
      <TouchableOpacity style={styles.button} onPress={calcularMedia}>
        <Text style={styles.buttonText}>Calcular a média</Text>
      </TouchableOpacity>
      {media !== '' && (
        <Text style={styles.result}>A média é: {media}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#8A2BE2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
