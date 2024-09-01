import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import CommonsStyle from '../styles/CommonsStyle';
import Commons from '../styles/Commons';

const Ranking = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../Files/background5.png')}
    resizeMode="cover"
    style={CommonsStyle.backgroundImage}
  >
    <View style={Commons.container}>
      <View style={Commons.titleContainerRanking}>
        <View style={Commons.iconContainerRanking}>
          <Image
            source={require('../Files/rankingf.png')} 
            style={CommonsStyle.iconos}
          />
        </View>
        <Text style={Commons.tituloRanking}>RANKING</Text>
      </View>
  
      <View style={Commons.cardContainerRanking}>
        <Card style={Commons.cardRanking}>
          <Card.Content>
            <Image source={require('../Files/orof.png')} style={Commons.trophyImageRanking} />
            <Text style={Commons.rankTextRanking}>1. Pol</Text>
            <Text style={Commons.pointsTextRanking}>Puntos: </Text>
          </Card.Content>
        </Card>
      </View>
  
      <View style={Commons.cardContainerRanking}>
        <Card style={Commons.cardRanking}>
          <Card.Content>
            <Image source={require('../Files/plataf.png')} style={Commons.trophyImageRanking} />
            <Text style={Commons.rankTextRanking}>2. Sergio </Text>
            <Text style={Commons.pointsTextRanking}>Puntos: </Text>
          </Card.Content>
        </Card>
      </View>
  
      <View style={Commons.cardContainerRanking}>
        <Card style={Commons.cardRanking}>
          <Card.Content>
            <Image source={require('../Files/broncef.png')} style={Commons.trophyImageRanking} />
            <Text style={Commons.rankTextRanking}>3. María </Text>
            <Text style={Commons.pointsTextRanking}>Puntos: </Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  </ImageBackground>
  
  );
};

export default Ranking;

