import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { CheckUser } from "../DAO/CheckUser";
import Usuario from "../model/Usuario";

export default function Conexion() {
    const [showModal, setShowModal] = useState(false);
    const [usuario, setUsuario] = useState <Usuario>();

    async function checkData() {
        const usu = await CheckUser(usuario.username, usuario.password);
        setUsuario(usu);
        
    }

    useEffect(() => {
        setShowModal(false);
        checkData();

    }, []);

    return (
        <View>
            
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',


    }
})
