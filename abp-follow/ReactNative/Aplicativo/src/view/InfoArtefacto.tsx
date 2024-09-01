import InfoArtefactoModel from "../model/InfoArtefactoModel";
import { useState, useEffect } from "react";
import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { CommonCard } from "../styles/CommonCard";
import { View, ImageBackground } from "react-native";
import Commons from "../styles/Commons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GetArtefactoByQR } from "../DAO/GetArtefactoByQr";
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";




const InfoArtefacto = ({ navigation, route }) => {

    const [infoArtefacto, setInfoArtefacto] = useState([]);

    const images = {
        'Varita': require('../Files/imagenes/varita.jpg'),
        'Anillo': require('../Files/imagenes/AnilloUnico.jpg'),
        'Batarang': require('../Files/imagenes/Batarang.jpg'),
        'Lobo': require('../Files/imagenes/colganteLoboBlanco.jpg'),
        'Thor': require('../Files/imagenes/MartillodeThor.jpg'),
        'mascaradeV': require('../Files/imagenes/mascaradeV.jpg'),
        'Rudolf': require('../Files/imagenes/Rudolf.jpg'),
        'Laser': require('../Files/imagenes/Laser.jpg'),
        'Sombrero': require('../Files/imagenes/sombreroSeleccionador.jpg'),
        'Trono': require('../Files/imagenes/tronodeHierro.jpg'),
        // Añade aquí las riuta de la imagen para que pueda añadirse correctamente...
    };

    //console.log("Ruta de routeparams " + route.params.qrCode)

    useEffect(() => {
        const fetchArtefacto = async () => {
            const qrCode = route.params?.qrCode || '';  // Obtiene el código QR de los parámetros de la ruta
            const artefacto = route.params?.artefacto || await GetArtefactoByQR(qrCode);
            //console.log(infoArtefacto)
            setInfoArtefacto(artefacto);

        };

        fetchArtefacto();
    }, [route.params]);

    return (
        <SafeAreaProvider>
            <ImageBackground source={require('../Files/background5.png')} resizeMode="cover" style={Commons.backgroundImage}>
                <View style={CommonCard.container}>
                    <View style={CommonCard.descriptionContainer}>
                        <Card style={[CommonCard.card]}>
                            <Card.Content>
                                {infoArtefacto && <Text style={CommonCard.title} variant="titleLarge">{infoArtefacto.nombre}</Text>}
                            </Card.Content>
                            <Card.Cover source={images[infoArtefacto.nombre]} style={CommonCard.coverImage} />
                            <Card.Content style={[CommonCard.categoryPointsContainer]}>
                                <Text>
                                    <Text style={CommonCard.boldText}>Categoría: </Text>
                                    <Text>{infoArtefacto.categoria}</Text>
                                </Text>
                                <Text>
                                    <Text style={CommonCard.boldText}>Puntos: </Text>
                                    <Text>{infoArtefacto.puntos}</Text>
                                </Text>
                            </Card.Content>
                            <Card.Content>
                                <Text style={CommonCard.boldText}>Descripción:</Text>
                                <Text style={CommonCard.body}>{infoArtefacto.descripcion}</Text>
                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

export default InfoArtefacto;