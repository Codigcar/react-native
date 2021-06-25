import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/Styles';

 export const Pagina2Screen = () => {
    //  Reemplaza a los "props" pero sobrecarga la aplicación usando este hook
     const navigator = useNavigation();

     useEffect(() => {
         navigator.setOptions({
            title:'Tituloo',
            headerBackTitle:'Atras'
         })
     }, [])

     return (
         <View style={styles.globalMargin}>
             <Text>Pagina2</Text>
             <Button title="Ir a la pagina 3" onPress={()=>navigator.navigate('Pagina3Screen')}  />
         </View>
     )
 }
 