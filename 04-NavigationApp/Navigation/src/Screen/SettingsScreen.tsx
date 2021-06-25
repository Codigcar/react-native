import React from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/Styles';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{marginTop: insets.top, backgroundColor:'red'}}>
            <Text>Settings</Text>
        </View>
    )
}
