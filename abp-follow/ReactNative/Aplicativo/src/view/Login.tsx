import React, { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import CommonsStyle from "../styles/CommonsStyle";
import Commons from "../styles/Commons";
import { Button, TextInput } from "react-native-paper";
import { AuthContext } from "../config/AuthContext";
import Usuario from "../model/Usuario";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CheckUser } from "../DAO/CheckUser";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = ({ navigation }) => {

  const { setLoggedIn, setUser } = useContext(AuthContext);


  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleButtonPress() {
    if (username === "" || password.length === 0) { // Validación de entrada
      alert('¡Por favor, rellene todos los campos!');
      return;
    }
    //fetch comprobar user y passw
    try {
      const isUserOk = await CheckUser(username, password); //recuperar datos bbdd
      console.log('Resultado de la autenticación:', isUserOk);
      if (isUserOk) {
        const userData = { username, password };
        console.log('Datos del usuario almacenados:', userData);
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        setLoggedIn(true);
        console.log("USER TEST: " + JSON.stringify(new Usuario(username, password)))
        setUser(isUserOk);
        navigation.navigate('App'); 
        alert('Bienvenido ' + username);
      } else {
        setLoggedIn(false);
        alert('¡Contraseña o usuario incorrectos!');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('¡Error al iniciar sesión!');
    }
  }

  

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require('../Files/background5.png')} resizeMode="cover"
        style={CommonsStyle.backgroundImage}
      >
        <View style={[CommonsStyle.container]}>
          <Image
            style={CommonsStyle.tinyLogo}
            source={require('../Files/logo.png')}
          />
          <View>
            <TextInput
              placeholder="Nombre de usuario"
              style={Commons.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
              left={
                <TextInput.Icon
                  icon="account-cowboy-hat"
                />
              }
            />
          </View>
          <View>
            <TextInput
              placeholder="Contraseña"
              style={Commons.input}
              value={password}
              secureTextEntry={!showPassword}
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye-off' : 'eye'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={{ marginBottom: 20, elevation: 5, }} >
            <Button
              icon="account-plus"
              mode="contained"
              buttonColor="#fdf6d9"
              textColor="black"
              onPress={() => handleButtonPress()}
            >
              Acceder
            </Button>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
                {"¿No tiene cuenta? Registrese aqui"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

export default Login;
