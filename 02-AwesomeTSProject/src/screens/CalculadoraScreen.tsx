import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('10');
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroText: string) => {
        setNumero(numero + numeroText);
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            <Text style={styles.resultado}>{numero}</Text>

            <View style={styles.fila}>
                <BotonCalc text="C" color='#9B9B9B' accion={limpiar} />
                <BotonCalc text="+/-" color='#9B9B9B' />
                <BotonCalc text="del" color='#9B9B9B' />
                <BotonCalc text="/" color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="7" />
                <BotonCalc text="8" />
                <BotonCalc text="9" />
                <BotonCalc text="/" color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="4" />
                <BotonCalc text="5" />
                <BotonCalc text="6" />
                <BotonCalc text="/" color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="1" />
                <BotonCalc text="2" />
                <BotonCalc text="3" />
                <BotonCalc text="/" color='#FF9427' />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="0" ancho={true} />
                <BotonCalc text="." />
                <BotonCalc text="=" color='#FF9427' />
            </View>
        </View>
    )
}
