import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Image, Dimensions, SafeAreaView, Animated, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Commons from "../styles/Commons";
import { AuthContext } from "../config/AuthContext";
import { GetArtefactos } from "../DAO/GetArtefactos";
import { getUsuarioArtefacto } from "../DAO/GetUsuarioArtefacto";
import { useIsFocused } from '@react-navigation/native';

const images = {
  'Varita': {
    normal: require('../Files/imagenes/varita.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'Anillo': {
    normal: require('../Files/imagenes/AnilloUnico.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'Rudolf': {
    normal: require('../Files/imagenes/Rudolf.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },

  'Laser': {
    normal: require('../Files/imagenes/Laser.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'mascaradeV': {
    normal: require('../Files/imagenes/mascaradeV.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'Batarang': {
    normal: require('../Files/imagenes/Batarang.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'Trono': {
    normal: require('../Files/imagenes/tronodeHierro.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'Lobo': {
    normal: require('../Files/imagenes/colganteLoboBlanco.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'Thor': {
    normal: require('../Files/imagenes/MartillodeThor.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  },
  'Sombrero': {
    normal: require('../Files/imagenes/sombreroSeleccionador.jpg'),
    grayscale: require('../Files/imagenes/notFound.jpg'),
  }
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {Object.values(images).map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={imagen.normal}
            style={[
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

const ArtefactosConsegidos = ({ navigation }) => {

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const { user, setLoggedIn, setUser } = useContext(AuthContext);
  const [artefactosUsuario, setArtefactosUsuario] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {

    const fetchArtefactosUsuario = async () => {
      const artefactos = await GetArtefactos();
      const artefactosUsuario = await Promise.all(artefactos.map(async artefacto => {
        const tieneArtefacto = await getUsuarioArtefacto(user.id, artefacto.id);
        const imagen = images[artefacto.nombre];
        return { ...artefacto, tieneArtefacto, imagen };
      }));

      artefactosUsuario.sort((a, b) => {
        const nombres = Object.keys(images);
        return nombres.indexOf(a.nombre) - nombres.indexOf(b.nombre);
      });

      setArtefactosUsuario(artefactosUsuario);
    };

    fetchArtefactosUsuario();
  }, [isFocused]);

  const handleImagePress = (artefacto) => {
    if (artefacto.tieneArtefacto) {
      navigation.navigate('Informacion Artefacto', { artefacto });
    } else {
      alert('Artefacto no encontrado');
    }
  };

  return (
    <ImageBackground
      source={require('../Files/background5.png')} resizeMode="cover"
      style={Commons.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <Backdrop scrollX={scrollX} />
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          snapToAlignment="start"
          contentContainerStyle={{
            paddingTop: 200,
            paddingHorizontal: ESPACIO_CONTENEDOR,
          }}
          snapToInterval={ANCHO_CONTENEDOR}
          decelerationRate={0}
          scrollEventThrottle={16}
          data={artefactosUsuario}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            console.log("KLK " + item.nombre, item.tieneArtefacto, item.imagen.grayscale);
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR,
            ];

            const scrollY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0],
            });
            return (
              <View style={{ width: ANCHO_CONTENEDOR }}>
                <Animated.View
                  style={{
                    marginHorizontal: ESPACIO,
                    padding: ESPACIO,
                    borderRadius: 34,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY: scrollY }],
                  }}
                >
                  <TouchableOpacity
                    style={styles.posterImage}
                    onPress={() => handleImagePress(item)}
                  >
                    <View>
                      <Image source={item.tieneArtefacto ? item.imagen.normal : item.imagen.grayscale} style={styles.posterImage} onError={(error) => console.log(error)} />
                    </View>
                  </TouchableOpacity>

                </Animated.View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

export default ArtefactosConsegidos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});