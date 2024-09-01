import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import CommonsStyle from '../styles/CommonsStyle';
import Commons from '../styles/Commons';
const Amigos = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredAmigos, setFilteredAmigos] = useState([]);
  const amigos = [
    { name: 'Adri', image: require('../Files/iconof.png') },
    { name: 'Andrés', image: require('../Files/iconof.png') },
    { name: 'Carlos', image: require('../Files/iconof.png') },
    { name: 'Ferran', image: require('../Files/iconof.png') },
    { name: 'Gabriela', image: require('../Files/iconof.png') },
    { name: 'Gonzalo', image: require('../Files/iconof.png') },
    { name: 'Juan', image: require('../Files/iconof.png') },
    { name: 'Manu', image: require('../Files/iconof.png') },
    { name: 'María', image: require('../Files/iconof.png') },
    { name: 'Marc', image: require('../Files/iconof.png') },
    { name: 'Marina', image: require('../Files/iconof.png') },
    { name: 'Pepe', image: require('../Files/iconof.png') },
    { name: 'Pol', image: require('../Files/iconof.png') },
    { name: 'Sara', image: require('../Files/iconof.png') },
    { name: 'Sergi', image: require('../Files/iconof.png') },
    { name: 'Sergio', image: require('../Files/iconof.png') },
    { name: 'Víctor', image: require('../Files/iconof.png') },
  ];
  const handleChat = (friendName) => {
    console.log(`Iniciando chat con ${friendName}`);
  };
  const handleSearch = () => {
    const filtered = amigos.filter(amigo =>
      amigo.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredAmigos(filtered);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleChat(item.name)}>
      <Card style={Commons.card}>
        <Card.Content style={Commons.content}>
          <View style={Commons.amigoItem}>
            <Image source={item.image} style={Commons.amigoImage} />
            <Text style={Commons.amigoName}>{item.name}</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={require('../Files/background5.png')}
      resizeMode="cover"
      style={CommonsStyle.backgroundImage}
    >
      <View style={Commons.container}>
        <View style={Commons.titleContainer}>
          <View style={Commons.logo}>
            <Image
              source={require('../Files/amigosf.png')}
              style={CommonsStyle.iconos}
            />
            <Text style={CommonsStyle.titulo}>AMIGOS</Text>
          </View>
        </View>
        <View style={Commons.searchContainer}>
          <TextInput
            style={Commons.input}
            placeholder="Buscar amig@"
            value={searchText}
            onChangeText={text => setSearchText(text)}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity style={Commons.searchButton} onPress={handleSearch}>
            <Text style={Commons.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={searchText ? filteredAmigos : amigos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
};
export default Amigos;
