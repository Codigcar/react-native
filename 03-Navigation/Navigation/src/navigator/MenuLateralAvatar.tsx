import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, Text, View, Image } from 'react-native';
import { styles } from '../theme/Styles';

const Drawer = createDrawerNavigator();

export const MenuLateralAvatar=() => {

  const {width, height} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={ width > height ? 'permanent': 'front'}
    drawerContent={(props) => <MenuInterno {...props} />} >
      <Drawer.Screen name="StackNavigator"     component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    return(
        <DrawerContentScrollView>
            <View style={styles.avatarFondo}>
                <Image style={styles.avatar} source={{uri:"https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png"}} />
            </View>
        </DrawerContentScrollView>
    );
}