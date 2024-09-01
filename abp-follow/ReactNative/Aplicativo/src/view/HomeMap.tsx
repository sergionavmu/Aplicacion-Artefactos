import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { AuthContext } from '../config/AuthContext';
import Login from './Login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { artefactosDeUsuario } from '../DAO/GetArtefactosByUser';



const HomeMap = ({ navigation }) => {

  const handleQRCodeScan = () => {
    navigation.navigate('Qr');
  };

  const { isLoggedIn, user, setLoggedIn, setUser } = useContext(AuthContext);
  const [artefacts, setArtefacts] = useState([]);


  useEffect(() => {
    const fetchArtefacts = async () => {
        const artefactsFromDB = await artefactosDeUsuario(user.id);
        setArtefacts(artefactsFromDB);
    };

    fetchArtefacts();
}, []);

  return (
    isLoggedIn ? (
      <SafeAreaProvider>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 41.3851,
              longitude: 2.1734,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={{ latitude: 41.3840, longitude: 2.1734 }} title="Artefacto 1" />
            <Marker coordinate={{ latitude: 41.3851, longitude: 2.1934 }} title="Artefacto 2" />
            <Marker coordinate={{ latitude: 41.3851, longitude: 2.1600 }} title="Artefacto 3" />

          </MapView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleQRCodeScan}>
              <Image
                source={{
                  uri: 'https://thenounproject.com/api/private/icons/1969516/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0',
                }}
                style={styles.qrCodeButton}
              />
            </TouchableOpacity>
          </View>
          <Card style={{backgroundColor: '#FFF5E9'}}>
            <Card.Content>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                {artefacts.map((artefact, index) => (
                    <Text style={{fontStyle: 'italic', fontSize: 16, color: '#000000'}} key={index}>Artefacto conseguido: {artefact.nombre}</Text>
                ))}
              </View>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaProvider>
    ) : (
      <Login navigation={navigation} />
    )
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: '120%',
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  qrCodeButton: {
    marginTop: '10%',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  progressBar: {
    width: 200,
    marginTop: 15,
    marginVertical: 10,
    overflow: 'hidden',
    height: 20,
    borderRadius: 45,
  },

});

export default HomeMap;


