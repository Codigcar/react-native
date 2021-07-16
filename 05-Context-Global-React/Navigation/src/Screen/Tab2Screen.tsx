import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text, Button } from 'react-native';
import { colores, styles } from '../theme/Styles';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { TouchableIconComponent } from '../components/TouchableIconComponent';

export const Tab2Screen = () => {
    console.log('Tab2Screen');

    const {signIn, authState} = useContext(AuthContext);
    
    return (
        <View>
            <Text>Tab2Screen</Text>
            
            <TouchableIconComponent iconName="airplane-outline" />
            
            <View style={styles.globalMargin}>
                <Text>Login</Text>
                {
                   !authState.isLoggedIn && <Button title="SignIng" onPress={signIn}></Button>
                }
            </View>
        </View>
    )
}
