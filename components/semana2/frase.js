import React,{useState} from 'react';
import { Text,View,StyleSheet } from 'react-native';
//data que me da frases aleatorias
import {frases} from './Data';

import { Pressable,FlatList } from 'react-native';

export function Frase() {

    const [frase, setFrase] = useState(frases[0]);
    const [flat, setFlat] = useState(false);

    const cambiarFrase = () => {
        const nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
        setFrase(nuevaFrase);
    };
    


    return (
        <View style={estilos.contenedor}>
            <Text 
                style={estilos.texto}>
                {frase}	
            </Text>

            <Pressable
                onPress={cambiarFrase}
                style={estilos.boton}
            >
                <Text style={{color:'white'}}>
                    Cambiar frase
                </Text>
            </Pressable>

            <Pressable
                onPress={() => setFlat(!flat)}
                style={estilos.Cambiar}
            >
                <Text style={{color:'white'}}>
                    Mostrar FlatList
                </Text>
            </Pressable>
            { flat && (
                <FlatList
                    data={frases}
                    renderItem={({item}) => (
                        <Pressable
                            onPress={() => setFrase(item)}
                            style={estilos.flat}
                        >
                            <Text style={{color:'black'}}>
                                {item}
                            </Text>
                        </Pressable>
                    )}
                />
            )}
            

        </View>
    )
}

const estilos=StyleSheet.create({
    contenedor: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    texto: {
        fontSize:15,
        textAlign:'center'

    },
    boton: {
        backgroundColor:'blue',
        padding:10,
        borderRadius:5,
        marginTop:10
    },
    Cambiar: {
        backgroundColor:'green',
        padding:10,
        borderRadius:5,
        marginTop:10
    },

    flat:{
        borderBlockColor:'black',
        padding:10
    }
})
    