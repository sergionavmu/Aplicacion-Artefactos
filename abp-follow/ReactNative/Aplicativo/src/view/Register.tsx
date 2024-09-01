import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import Commons from "../styles/Commons";
import { useContext, useState } from "react";
import Usuario from "../model/Usuario";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { authenticateUserName } from "../DAO/CheckUsername";
import { AuthContext } from "../config/AuthContext";
import CommonsStyle from "../styles/CommonsStyle";


export default function Register({ navigation }) {

    const { setLoggedIn, setUser } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [surname, setSurName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    async function handleButtonRegister() {
        try {
            const userData = await authenticateUserName(name, surname, email, username, password); 
            if (userData) {
                setLoggedIn(true);
                setUser(userData); // userData ahora contiene la ID generada
                navigation.navigate('App');
                alert('¡Se ha registrado con éxito!');
            } else {
                setLoggedIn(false);
                alert('¡Nombre de usuario ya en uso');
            }
        } catch (error) {
            console.error('Error al registrarse:', error);
            alert('¡Error al registrarse!');
        }
    }

    return (
        <SafeAreaProvider>
            <ImageBackground
                source={require('../Files/background5.png')} resizeMode="cover"
                style={CommonsStyle.backgroundImage}>
                <View style={[CommonsStyle.container]}>
                    <Text style={Commons.tituloRegister}> Registrese ahora </Text>
                    <TextInput
                        placeholder="Nombre"
                        style={Commons.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        left={
                            <TextInput.Icon
                                icon="account"
                            />
                        }
                    />
                    <View>
                        <TextInput
                            placeholder="Apellidos"
                            style={Commons.input}
                            value={surname}
                            onChangeText={(text) => setSurName(text)}
                            left={
                                <TextInput.Icon
                                    icon="account"
                                />
                            }
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Correo electrónico"
                            style={Commons.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            left={
                                <TextInput.Icon
                                    icon="email"
                                />
                            }
                        />
                    </View>
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
                            onPress={() => handleButtonRegister()}
                        >
                            Regiser Now
                        </Button>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
                            <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
                                {"¿Ha olvidado su contraseña?"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaProvider>


    );

}