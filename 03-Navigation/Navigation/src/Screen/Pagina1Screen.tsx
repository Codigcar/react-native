import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/Styles';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1</Text>
      <Text>Navegar entre pantallas</Text>
      <Button
        title="Ir a pagina2"
        onPress={() => navigation.navigate('Pagina2Screen')}
        color="red"
      />
      <Button
        title="Persona"
        onPress={() => navigation.navigate('PersonScreen')}
        color="blue"
      />
      <Text>Navegar con argumentos</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PersonScreen',{id: 1,nombre:'Carlos'})}>
        <Text>Carlos</Text>
      </TouchableOpacity>
    </View>
  );
};
