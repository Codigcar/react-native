import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { colores } from '../theme/Styles';

export const Tab2Screen = () => {
    console.log('Tab2Screen');
    
    return (
        <View>
            <Text>Tab2Screen</Text>
            <Icon name="airplane-outline" size={80} color={colores.primary}></Icon>
        </View>
    )
}
