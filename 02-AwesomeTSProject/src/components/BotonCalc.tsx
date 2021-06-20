import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface BotonProps {
  text: string;
  color?: string;
  ancho?: boolean;
  accion?: () => void;
}

export const BotonCalc = ({text, color = '#2D2D2D', ancho = false, accion}: BotonProps) => {
  return (
    <TouchableOpacity onPress={accion}>
        <View
        style={{
            ...styles.boton,
            backgroundColor: color,
            width: (ancho) ? 160:80
        }}>
        <Text style={styles.botonText}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};
