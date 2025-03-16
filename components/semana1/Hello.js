import React,{useState} from 'react';	
import { Text,View,StyleSheet } from 'react-native';
// para crear un boton personalizado usa estos componentes
import { 
    TouchableHighlight,
    Pressable,/*mas recomendado*/
    TouchableOpacity,/*con un hover adaptado*/
    TouchableNativeFeedback /*igual que el primero*/
} from 'react-native';
//importamos la funcion que nos permitira generar colores aleatorios
import GenerarColor from './GenerarColor';

export function Hello() {

    const [color,setColor]= useState('white');
    console.log(color);
    return (
        <View
            style={
                {
                    flex: 1,
                    backgroundColor: color,
                    justifyContent:'center',
                    alignItems:'center'
                }
            }
        >
            <Text>Hola mundo!</Text>
            <TouchableHighlight 
                style={estilos.boton}
                onPress={() => setColor(GenerarColor())}
            >
                    <Text style={estilos.texto}>
                        cambiar color 
                    </Text>
            </TouchableHighlight>
        </View>
    );
}

const estilos=StyleSheet.create({

    boton:{
        boxShadow: 5,
        borderCurve:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: '5px' 
    },
    texto:{
        color:'white',
        fontSize:20
    }
})
