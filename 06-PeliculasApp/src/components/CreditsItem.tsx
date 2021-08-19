import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interface/creditsInterface'

interface Props {
    actor: any
}

export const CreditsItem = (props: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${props.actor.profile_path}`;


    return (
        <View style={styles.container}>
            {
                props.actor.profile_path && (
                    <Image source={{uri}} style={{width:50, height:50, borderRadius:10}}/>
                )
            }
            <View style={styles.actoInfo}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {props.actor.name}
                </Text>
                <Text style={{fontSize:16, opacity: 0.7}}>
                    {props.actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        // Sombras abajo
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3,
        elevation: 20,
        // --Sombras abajo
        marginBottom:40,
        marginLeft: 20,
        marginRight:0,
        paddingRight: 10,
        height: 51
    },
    actoInfo:{
        marginLeft: 10,
        marginTop: 4
    }
})
