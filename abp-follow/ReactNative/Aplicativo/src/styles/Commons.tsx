import { StyleSheet } from "react-native";

export const Commons = StyleSheet.create({
    mainColor: {
        backgroundColor: "#fdf6d9"
    },
    backgroundImage: {
        marginTop: 50,
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
        height: 210,
        marginBottom: 70,
    },
    tinyLogoForgot: {
        width: 150,
        height: 150,
        marginRight: 12,
        marginBottom: 12,
        marginTop: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontSize: 16,
        height: 30,
        width: 280,
        margin: 12,
        borderWidth: 1,
        padding: 8,
        backgroundColor: "#1234",
        textAlign: "justify",
    },
    texto: {
        fontSize: 16,
        textAlign: "left",
    },
    titulo: {
        color: "black",
        fontSize: 20,
        textAlign: 'left',
        marginTop: 50,
        alignContent: "center",
        alignSelf: "center",
        elevation: 10,
        padding: 16,
    },
    tituloRegister: {
        color: "black",
        fontSize: 40,
        alignContent: "center",
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        padding: 5,
        marginTop: 20,
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
    customButton: {
        backgroundColor: 'crema',
        marginTop: 10,
    },

    iconStyle: {
        marginRight: 8,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8, // Ajusta el espacio entre el icono y el texto según tus preferencias
    },
    logo: {
        marginRight: 10,
        alignItems: 'flex-start',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    inputAmigos: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    searchButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    searchButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    card: {
        marginBottom: 20,
    },
    containerChat: {
        flex: 1,
    },

    content: {
        alignItems: 'center',
    },
    amigoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    amigoImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    amigoName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleContainerChat: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    logoChat: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    friendImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    friendName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    backgroundImageChat: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    headerChatPantalla: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatarChatPantalla: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerTextChatPantalla: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageContainerChatPantalla: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    myMessageChatPantalla: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    messageTextChatPantalla: {
        fontSize: 16,
    },
    backgroundImageChatPantalla: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    composeContainerChatPantalla: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    titleContainerRanking: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
      },
      iconContainerRanking: {
        marginRight: 10,
        alignItems: 'flex-start',
      },
      tituloRanking: {
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 10,
      },
      cardContainerRanking: {
        flex: 0.3,
        width: '90%',
        marginBottom: 20,
      },
      cardRanking: {
        elevation: 5,
        backgroundColor: '#fdf6d9',
      },
      trophyImageRanking: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 10,
      },
      rankTextRanking: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },
      pointsTextRanking: {
        textAlign: 'center',
        fontSize: 16,
      },

});


export default Commons;

