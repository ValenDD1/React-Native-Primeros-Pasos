import React,{useState} from "react";

//usareos un boton que tenga una opacidad al darle click
import { Text, View ,StyleSheet,TouchableOpacity} from "react-native";

export function Contador() {

    const [contador, setContador] = useState(0);
    
    return (
        <View style={estilos.contenedor}>
            <Text 
                style={{
                    color: contador%2==0 ? "green" : "red",
                    fontSize: 30
                }}
                >
                    {contador}
            </Text>
            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
                style={estilos.boton}
            >
                <Text 
                    style={{ color: "white" }}
                >Incrementar</Text>
            </TouchableOpacity>


        </View>
    );
}

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    boton:{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    }
});

