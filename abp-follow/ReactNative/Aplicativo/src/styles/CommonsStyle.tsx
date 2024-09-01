import {StyleSheet, ImageBackground} from "react-native";

export const CommonsStyle = StyleSheet.create({
    mainColor: {
        backgroundColor: "#fdf6d9"
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 250, 
        height: 250,
        marginBottom: 70,
    },
    input: {
        fontSize: 16,
        height: 40,
        width: 280,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#1234",
    },
    texto: {
        fontSize: 16,
        textAlign: "left",
    },
    titulo: {
        color: "black",
        fontSize: 23,
        textAlign: 'left',
        marginBottom: 20,
    },
    iconos: {
        width: 60, 
        height: 60,
        marginRight: 40,
        marginLeft: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 120,
      },

});

export default CommonsStyle;

