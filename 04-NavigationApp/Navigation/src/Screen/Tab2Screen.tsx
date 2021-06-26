import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';

export const Tab2Screen = () => {
    console.log('Tab2Screen');
    
    return (
        <View>
            <Text>Tab2Screen</Text>
            <Icon name="airplane-outline" size={30} color="#900"></Icon>
        </View>
    )
}
