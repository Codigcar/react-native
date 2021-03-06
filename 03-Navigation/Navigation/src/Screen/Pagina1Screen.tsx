// import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/Styles';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft:()=>( <Button title="Menu" onPress={() => {navigation.toggleDrawer()}}/> )
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1</Text>
      <Text style={{marginVertical:15}}>Navegar entre pantallas</Text>
      <Button
        title="Ir a pagina2"
        onPress={() => navigation.navigate('Pagina2Screen')}
        color="red"
      />
      <Button
        title="Persona"
        onPress={() => navigation.navigate('PersonaScreen')}
        color="blue"
      />
      <Text style={{marginVertical:15}}>Navegar con argumentos</Text>

      <View style={styles.fila}>
        <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'#5856D6'}} onPress={() => navigation.navigate('PersonaScreen',{id: 1,nombre:'Carlos'})}>
          <Text style={styles.botonGrandeText}>Carlos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botonGrande} onPress={() => navigation.navigate('PersonaScreen',{id: 2,nombre:'Mariela'})}>
          <Text style={styles.botonGrandeText}>Mariela</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
