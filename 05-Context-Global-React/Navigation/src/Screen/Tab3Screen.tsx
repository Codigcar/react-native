import React from 'react'
import { useContext } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { styles, colores } from '../theme/Styles';

export const Tab3Screen = () => {
    console.log('Tab3Screen');

    const context = useContext(AuthContext);
    // context.authState.

    return (
        <View>
            <Text>Tab3Screen</Text>
            <View style={styles.globalMargin}>
                <Text>Dato traido del Context: </Text>
                <Text></Text>
                <Text>{JSON.stringify(context.authState,null,7)}</Text>
                {
                    context.authState.favoriteIcon && (
                        <Icon name={context.authState.favoriteIcon} size={150} color={colores.primary} />
                    )
                }

            </View>
        </View>
    )
}
