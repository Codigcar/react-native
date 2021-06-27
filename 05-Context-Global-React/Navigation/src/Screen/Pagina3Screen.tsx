import React from 'react'
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/Styles';

interface Props extends StackScreenProps<any, any>{};

 export const Pagina3Screen = ({navigation}:Props) => {
     return (
         <View style={styles.globalMargin}>
             <Text>Pagina3</Text>
             <Button title="Regresar" onPress={()=>navigation.navigate('Pagina2Screen')} color='green'></Button>
             <Button title="Ir a la pagina 1 (2 veces atras)" onPress={()=>navigation.popToTop()} color='orange'></Button>
         </View>
     )
 }
 