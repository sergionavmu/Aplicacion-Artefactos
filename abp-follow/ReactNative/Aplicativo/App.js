import Login from './src/view/Login';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Drawer } from 'react-native-paper';
import Perfil from './src/view/Perfil';
import menuAppBar from './src/styles/menuAppBar';
import Progreso from './src/view/Progreso';
import HomeMap from './src/view/HomeMap';
import InfoArtefacto from './src/view/InfoArtefacto';
import ArtefactosConsegidos from './src/view/ArtefactosConseguidos';
import Register from './src/view/Register';
import ForgotPass from './src/view/ForgotPass';
import Amigos from './src/view/Amigos';
import Chat from './src/view/Chat';
import Conexion from './src/view/Conexion';
import CodigoQr from './src/view/CodigoQr';
import { AuthProvider } from './src/config/AuthContext';
import { Alert, BackHandler } from 'react-native';
import { useEffect } from 'react';

const Stack = createStackNavigator();
const InnerStack = createStackNavigator();

function InnerStackScreen({navigation}) {

  //boton back
  useEffect(() => {
    const backAction = () => {
      Alert.alert('¿Salir de la Aplicacion?', '¿De verdad quieres salir?', [
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Sí', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    
    <InnerStack.Navigator >
      <InnerStack.Screen name="menu" component={menuAppBar} options={{ headerShown: false }}/>
      <InnerStack.Screen name="Home" component={HomeMap} options={{ headerShown: false }} />
      <InnerStack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <InnerStack.Screen name="Progreso" component={Progreso} />
      <InnerStack.Screen name="Informacion Artefacto" component={InfoArtefacto}  />
      <InnerStack.Screen name="Artefacto Conseguido" component={ArtefactosConsegidos} options={{ headerShown: false }} />
      <InnerStack.Screen name="Amigos" component={Amigos} />
      <InnerStack.Screen name="Chat" component={Chat} />
      <InnerStack.Screen name="Qr" component={CodigoQr} />
      
    </InnerStack.Navigator>
  );
}

export default function App() {

  return (
    
    
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: true }}/>
          <Stack.Screen name="Forgot Password" component={ForgotPass} options={{ headerShown: true }}/>
          <Stack.Screen name="App" component={InnerStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );

}