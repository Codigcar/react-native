import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/Styles';
import { RootStackParams } from '../navigator/StackNavigator';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}:Props) => {
    const params = route.params;
    const {changeUserName} = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            // titulo de la ventana
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUserName(params.nombre);
    }, [])

    return (
        <View style={styles.globalMargin}>
            {/* <Text>PersonaScreen</Text> */}
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
