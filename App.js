import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [input, setInput] = useState('');

  const [resultado, setResultado] = useState('');

  const calcular = () => {
  try {
    // Substitui o "x" por "*" para que o JS entenda a multiplicação
    const expressao = input.replace(/x/g, '*');
    const resultadoCalculado = eval(expressao);
    setResultado(resultadoCalculado.toString());
  } catch (error) {
    setResultado('Erro');
  }
};
  
  const handlePress = (valor) => {
    setInput(input + valor);
  };

  const apagarUltimo = () => {
  setInput(input.slice(0, -1)); // remove o último caractere
};

  return (
    <View style={styles.container}>
      
      <Image 
      source={require("./src/logo.png")}
      style={styles.image}
      />

      <View style={styles.visor}>
        
        <Text style={styles.textNumeros}>
        {input}
        </Text>
        
        <Text style={styles.textResultado}>
          {resultado}
        </Text>
        
      </View>

      <View style={styles.teclado}>
        <TouchableOpacity 
        style={styles.numero1}
        onPress={apagarUltimo}>
          <Text>DELETE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('/')}>
          <Text>/</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('x')}>
          <Text>x</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('-')}>
          <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('.')}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={calcular}>
        <Text>=</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.numero}
        onPress={() => handlePress('+')}>
          <Text>+</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    marginTop:20,
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  visor: {
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
  },
  visor2:{
    flexDirection: "row",
  },
  textNumeros: {
    backgroundColor: "#fff",
    width: "65%",
    paddingVertical: 5,
    marginLeft: 10,
  },
  textResultado:{
    backgroundColor: "#fff",
    paddingVertical: 5,
    marginBottom:4,
    fontSize: 30,
    marginLeft: 10,
  },
  teclado: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    alignItems: "center",
  },
  numero1:{
    padding: 20,
    fontSize: 20,
    width: "92%",
    color: "black",
    backgroundColor: "#808080",
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
  },
  numero: {
    padding:39,
    fontSize: 20,
    color: "black",
    backgroundColor: "#808080",
    borderRadius: 10,
    margin: 7
  }
});
