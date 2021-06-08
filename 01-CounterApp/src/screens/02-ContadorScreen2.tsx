import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const ContadorScreenV2 = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contadors: {contador}
            </Text>

            <TouchableOpacity onPress={() => setContador(contador + 1)}>
                <View style={{backgroundColor:'red', borderRadius:100}}>
                    <Text>+1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title: {
        fontSize:40,
        textAlign:'center'
    },
    fab: {
        backgroundColor:'#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    }
})
