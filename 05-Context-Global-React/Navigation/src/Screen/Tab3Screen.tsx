import React from 'react'
import { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const Tab3Screen = () => {
    console.log('Tab3Screen');

    const context = useContext(AuthContext);
    
    return (
        <View>
            <Text>Tab3Screen</Text>
            <Text>Dato traido del Context: </Text>
            <Text>{JSON.stringify(context.authState,null,)}</Text>
        </View>
    )
}
