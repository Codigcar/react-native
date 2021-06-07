import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={{
            flex:1,
            justifyContent:'center'
        }}>
            <Text style={{
                textAlign:'center',
                fontSize:40
            }}>Contador: {contador}</Text>

            <Button title="+1" onPress={()=>setContador(contador + 1)}></Button>        
            <Button title="+1" onPress={()=>setContador(contador - 1)}></Button>        
        </View>
    )
}
