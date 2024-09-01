import { useEffect } from 'react';
import { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Button } from 'react-native-paper';
import CommonsStyle from "../styles/CommonsStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import Usuario from "../model/Usuario";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../config/AuthContext";
import { GetUsuarioName } from "../DAO/GetUsuarioName";
import { getUsuarioId } from '../DAO/CheckIdUser';


const Perfil = ({navigation}) => {
  const [usuario, setUsuario] = useState(new Usuario);
  const { user, setLoggedIn, setUser } = useContext(AuthContext);
  
  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    console.log("ID: " + user.id);
    const userData = await getUsuarioId(user.id);
    setUsuario(userData);
  }


  const handleBoton1 = () => {
    navigation.navigate('Progreso');
  };

  const handleBoton2 = () => {
    navigation.navigate('Amigos');
  };

  const handleBoton3 = () => {
    navigation.navigate('Chat');
  };



  async function handleLogout() {
    try {
      await AsyncStorage.removeItem('userData');
      setLoggedIn(false);
      setUser(null);
      alert('Sesión cerrada correctamente');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('¡Error al cerrar sesión!');
    }
  }

  return (
    <ImageBackground 
        source={require('../Files/background5.png')}  resizeMode="cover"
        style={CommonsStyle.backgroundImage}
      >
    <View style={{flex: 1, padding: 10}}>
      
      <Text style={CommonsStyle.titulo}>Perfil del Usuario</Text>

      
      <View style={{flex: 0.3, width: '116%'}}>
        <Card>
          <Card.Content style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handleBoton1}>
              <Image style={CommonsStyle.iconos}
                  source={{
                      uri: 'https://img.freepik.com/vector-premium/icono-grafico-barras-creciente-estilo-comico-aumentar-flecha-vector-ilustracion-dibujos-animados-pictograma-infografia-progreso-concepto-negocio-efecto-salpicadura_157943-6027.jpg',
                  }}
              />
              <Text style={CommonsStyle.texto}>Progreso</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={handleBoton2}>
              <Image style={CommonsStyle.iconos}
                  source={{
                      uri: 'https://img.freepik.com/vector-premium/icono-concepto-negocio-trabajo-equipo-dos-personas-dan-cinco-senales-eps-vectoriales-10_532800-202.jpg',
                  }}
              />
              <Text style={CommonsStyle.texto}>Amigos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleBoton3}>
              <Image style={CommonsStyle.iconos}
                  source={{
                      uri: 'https://img.freepik.com/foto-gratis/icono-aplicacion-comentarios-burbujas-chat-renderizado-3d_107791-16999.jpg?t=st=1708022808~exp=1708023408~hmac=7934be62eb0fe819c0f7636b1c9f3388f700a9441e06855ac9fd97fc339aebdf',
                  }}
              />
              <Text style={CommonsStyle.texto}>Chat</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
      

      
      <Text style={CommonsStyle.titulo}>Datos</Text>
      <Card style={{width: '150%'}}>
        <Card.Content style={{width: '150%'}}>
          <Text style={CommonsStyle.texto}>Username: {usuario.username}</Text>
          <Text style={CommonsStyle.texto}>Nombre: {usuario.name}</Text>
          <Text style={CommonsStyle.texto}>Apellidos: {usuario.surname}</Text>
          <Text style={CommonsStyle.texto}>E-mail: {usuario.email}</Text>
        </Card.Content>
      </Card>

      <View style={{ marginBottom: 70, elevation: 5, position: 'absolute', bottom: 3, left: 10, right: 200 }} >
            <Button
              icon="logout"
              mode="contained"
              buttonColor="#fdf6d9"
              textColor="black"
              onPress={() => handleLogout()}
            >
              Logout
            </Button>
          </View>

    </View>
    </ImageBackground>
  );
};

export default Perfil;
