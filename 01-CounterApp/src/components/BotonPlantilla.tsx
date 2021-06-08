import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

interface Props {
  title: string;
  position: 'b-der' | 'b-izq';
  onPress: () => void;
}

export const BotonPlantilla = (props: Props) => {
  return (
    <TouchableOpacity
      style={props.position === 'b-der' ? styles.touchDer : styles.touchIzq}
      onPress={props.onPress}
      activeOpacity={0.75}>
      <View style={styles.botonDer}>
        <Text style={styles.botonTextDer}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchDer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  touchIzq: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  botonDer: {
    backgroundColor: '#5856D6',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  botonTextDer: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: 0,
  },
});
