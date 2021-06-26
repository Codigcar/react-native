import {StyleSheet} from 'react-native';

export const colores = {
    primary: '#5856D6',
    seconday: 'red'
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginBottom:10
    },
    fila:{
        flexDirection:'row'
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'#FF9427',
        marginRight:20,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    botonGrandeText:{
        color:'white',
        fontWeight:'bold'
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100
    },
    avatarFondo:{
        alignItems:'center',
        marginTop:20
    },
    menuContainer:{
        alignItems:'center',
        marginVertical:20
    },
    menuBoton:{
        marginVertical:7
    },
    menuTexto:{
        color:'black'
    }
});