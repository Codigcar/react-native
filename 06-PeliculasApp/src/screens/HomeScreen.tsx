import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native';

export const HomeScreen = () => {

    const navigation =  useNavigation();

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='ir a Detail' onPress={() => navigation.navigate('DetailScreen')}></Button>
        </View>
    )
}
