import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BotonPlantilla} from '../components/BotonPlantilla';

export const ContadorScreenV2 = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <BotonPlantilla
        title="+1"
        position="b-der"
        onPress={() => setContador(contador + 1)}
      />
      <BotonPlantilla
        title="-1"
        position="b-izq"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
});
