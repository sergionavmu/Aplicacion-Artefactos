import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { GetArtefactoByQR } from '../DAO/GetArtefactoByQr';
import { Camera, CameraView } from 'expo-camera/next';
import { asociarArtefactoConUsuario } from '../DAO/GetArtefactoUsuario';
import { AuthContext } from '../config/AuthContext';
import { getUsuarioId } from '../DAO/CheckIdUser';
import Usuario from '../model/Usuario';

const CodigoQr = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { user, setLoggedIn, setUser } = useContext(AuthContext);
  const [usuario, setUsuario] = useState(new Usuario);
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    console.log("USERID: " + user.id);
    const usuarioId = await getUsuarioId(user.id);
    setUsuario(usuarioId);
  }
 
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    try {
      const artefacto = await GetArtefactoByQR(data);
      console.log('Artefacto setScanned leido correctamente ', artefacto.nombre);

      alert(`Has encontrado un artefacto ${artefacto.nombre}!`);

      console.log("USERID: " + user.id);
      const response = await asociarArtefactoConUsuario(user.id, data);
      alert(response.message);

      await navigation.navigate('Informacion Artefacto', { qrCode: data });
  } catch (error) {
      console.log('Error al obtener los datos:', error);

  }
  };

  const renderPermissionMessage = () => {
    if (hasPermission === null) {
      return <Text>Pidiendo permisos de cámara</Text>;
    }
    if (hasPermission === false) {
      return <Text>No hay acceso a la cámara</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderPermissionMessage()}
      {hasPermission && (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
};

export default CodigoQr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});


