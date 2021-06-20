import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    fondo: {
        flex:1,
        backgroundColor:'black',
    },
    resultado: {
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginRight:30
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right',
        marginRight:30
    },
    calculadoraContainer:{
        flex:1,
        justifyContent:'flex-end',
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#9B9B9B',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:5
    },
    botonText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight:'bold'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
    }
});
