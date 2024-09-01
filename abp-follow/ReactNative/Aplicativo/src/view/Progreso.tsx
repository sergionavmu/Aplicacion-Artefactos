import * as React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { ProgressBar, List, Card, PaperProvider } from 'react-native-paper';
import CommonsStyle from '../styles/CommonsStyle';
import { LinearGradient } from "expo-linear-gradient";


const Progreso = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../Files/background5.png')}
      resizeMode="cover"
      style={CommonsStyle.backgroundImage}
    >
      <Text style={CommonsStyle.titulo}>Progreso del Usuario</Text>
      <Text>Puntos acumulados: </Text>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <List.Section style={[CommonsStyle.mainColor]}>
                <List.Accordion style={[CommonsStyle.mainColor]} title="Artefactos Conseguidos" id="1" left={() => <List.Icon icon="gift" />}>
                  <List.Item title="First Item" />
                </List.Accordion>
              </List.Section>
            </Card.Content>
          </Card>
        </View>

        <Card>
          <Card.Content>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text>Legendario</Text>
              <ProgressBar progress={0.2} color={'#ffd700'} style={styles.progressBar} /> 
              <Text>Epico</Text>
              <ProgressBar progress={0.5} color={'#a66392'} style={styles.progressBar} />
              <Text>Raro</Text>
              <ProgressBar progress={0.7} color={'#7984db'} style={styles.progressBar} />
              <Text>Comun</Text>
              <ProgressBar progress={0.9} color={'#808080'} style={styles.progressBar} />

            </View>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default Progreso;

const styles = StyleSheet.create({
  progressBarWrapper: {
    width: 250,
    overflow: 'hidden',
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 0.5,
    padding: 20,
    width: '90%',
    marginBottom: 20,

  },
  card: {
    elevation: 5,
    width: 400,
    backgroundColor: '#fdf6d9',
  },

  progressBar: {
    width: 350,
    marginTop: 15,
    marginVertical: 10,
    overflow: 'hidden',
    height: 20,
    borderRadius: 45,
  },

});
