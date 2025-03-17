//importar las librerias necesarias para conseguir las coordenadas
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,Platform } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from 'react-native-maps';

export function Ubicacion() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
            setErrorMsg("Permiso de ubicación denegado.");
            return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        })();
    }, []);

    return (
        <View style={styles.container}>
            {errorMsg ? (
            <Text style={styles.error}>{errorMsg}</Text>
            ) : location ? (
            <>
                <Text style={styles.text}>Latitud: {location.latitude}</Text>
                <Text style={styles.text}>Longitud: {location.longitude}</Text>

                {Platform.OS === "web" ? (
                // Google Maps en Web
                <iframe
                    width="100%"
                    height="400"
                    style={styles.map}
                    src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
                ></iframe>
                ) : (
                // MapView en Android/iOS
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title="Tu ubicación"
                    />
                </MapView>
                )}
            </>
            ) : (
            <Text style={styles.text}>Obteniendo ubicación...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 16, marginBottom: 10 },
    error: { fontSize: 16, color: "red", textAlign: "center" },
    map: { width: "100%", height: 400, marginTop: 20 }
});