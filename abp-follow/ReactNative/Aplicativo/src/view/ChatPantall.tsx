import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground } from 'react-native';
import Commons from '../styles/Commons';

const Chat = () => {
  const messages = [
    { id: '1', text: 'Hola', sender: 'Adri' },
    { id: '2', text: '¿Cómo estás?', sender: 'You' },
    { id: '3', text: 'Bien, gracias', sender: 'Adri' },
    { id: '4', text: '¿Y tú?', sender: 'Adri' },
    { id: '5', text: 'También bien', sender: 'You' },
  ];

  const renderMessageItem = ({ item }) => (
    <View style={item.sender === 'You' ? [Commons.messageContainerChatPantalla, Commons.myMessageChatPantalla] : Commons.messageContainerChatPantalla}>
      <Text style={Commons.messageTextChatPantalla}>{item.text}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../Files/background5.png')}
      resizeMode="cover"
      style={Commons.backgroundImageChatPantalla}
    >
      <View style={Commons.container}>
        {/*Encabezado*/}
        <View style={Commons.headerChatPantalla}>
          <Image source={require('../Files/perfilf.png')} style={Commons.avatarChatPantalla} />
          <Text style={Commons.headerTextChatPantalla}>Adri</Text>
        </View>
        {/* Lista de mensajes */}
        <FlatList
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
        />
        {/* Composición del mensaje */}
        <View style={Commons.composeContainerChatPantalla}>
          {/* Agregar un TextInput y un botón para enviar mensajes */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Chat;
