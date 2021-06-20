import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/Styles';

interface Props extends StackScreenProps<any, any>{};

export const PersonaScreen = ({route, navigation}:Props) => {
    const params = route.params;
    
    useEffect(() => {
        navigation.setOptions({
            // titulo de la ventana
            title: params!.nombre as any
        })
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
