import React from 'react'
import { Text, View } from 'react-native'

const HolaMundoScreen = () => {
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            // backgroundColor: 'red'
            }}>
            <Text style={{
                textAlign:'center',
                fontSize:40
            }}>¡Bienvenido!</Text>
        </View>
    )
}

export default HolaMundoScreen
