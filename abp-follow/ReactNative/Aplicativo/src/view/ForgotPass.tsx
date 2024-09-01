import { ImageBackground, Image, Text, TouchableOpacity, View } from "react-native";
import Commons from "../styles/Commons";
import { useState } from "react";
import ForgotPassModel from "../model/ForgotPassModel";
import { Button, TextInput } from "react-native-paper";

export default function ForgotPass({ navigation }) {

    const [forgotPass, setForgotPass] = useState(new ForgotPassModel)

    return (
        <ImageBackground
            source={require('../Files/background5.png')} resizeMode="cover"
            style={Commons.backgroundImage}>
            <View>
                <Image
                    style={Commons.tinyLogoForgot}
                    source={require('../Files/forgotpass.png')}
                />
            </View>
            <View style={{ alignItems: 'center', marginTop: 50 }} >
                <View>
                    <TextInput
                        placeholder="Correo electrónico"                      
                        style={Commons.input}
                        value={forgotPass.email}
                        onChangeText={(text) => setForgotPass({ ...forgotPass, email: text })}
                        left={ 
                            <TextInput.Icon
                            icon="email"/>}
                    />
                </View>
                <View style={{ marginBottom: 20}}>
                    <Button
                        icon="email-send-outline"
                        mode="contained"
                        buttonColor="#fdf6d9"
                        textColor="black"
                        onPress={() => {
                            console.log('Pressed');
                            alert('¡Correo enviado con exito!');
                        }}
                    >
                        Send email
                    </Button>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text>
                            ¿Ya tienes una cuenta? 
                        <Text style={{ color: 'black', textDecorationLine: 'underline' }}>
                            {" Inicie sesión"}
                        </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );

}