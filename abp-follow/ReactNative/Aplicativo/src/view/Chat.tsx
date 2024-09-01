import React from 'react';
import { View, Text, Image, FlatList, ImageBackground } from 'react-native';
import Commons from '../styles/Commons';

const Chat = () => {
  const friends = [
    { name: 'Adri', image: require('../Files/perfilf.png') },
    { name: 'Andrés', image: require('../Files/perfilf.png') },
    { name: 'Carlos', image: require('../Files/perfilf.png') },
    { name: 'Pol', image: require('../Files/perfilf.png') },
    { name: 'María', image: require('../Files/perfilf.png') },
    { name: 'Sergio', image: require('../Files/perfilf.png') },
    { name: 'Sergi', image: require('../Files/perfilf.png') },
    { name: 'Héctor', image: require('../Files/perfilf.png') },
    { name: 'Apruébame', image: require('../Files/perfilf.png') },
    { name: 'Poniéndome', image: require('../Files/perfilf.png') },
    { name: 'Un 10', image: require('../Files/perfilf.png') },
  ];

  // Renderiza un elemento de la lista de amigos
  const renderFriendItem = ({ item }) => (
    <View style={Commons.friendItem}>
      <Image source={item.image} style={Commons.friendImage} />
      <Text style={Commons.friendName}>{item.name}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../Files/background5.png')}
      resizeMode="cover"
      style={Commons.backgroundImage}
    >
      <View style={Commons.containerChat}>
        {/* Título centrado */}
        <View style={Commons.titleContainerChat}>
          <Image source={require('../Files/chatf.png')} style={Commons.logoChat} />
        </View>
        {/* Lista de amigos */}
        <FlatList
          data={friends}
          renderItem={renderFriendItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </ImageBackground>
  );
};

export default Chat;
