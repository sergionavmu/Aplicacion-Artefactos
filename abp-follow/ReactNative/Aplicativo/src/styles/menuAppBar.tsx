import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Perfil from '../view/Perfil';
import Login from '../view/Login';
import Eventos from '../view/Eventos';
import HomeMap from '../view/HomeMap';
import ArtefactosConsegidos from '../view/ArtefactosConseguidos';
import Ranking from '../view/Ranking';

const PerfilRoute = () => {
  const navigation = useNavigation();
  return <Perfil navigation={navigation} />;
};

const LoginRoute = () =>  <Login navigation={BottomNavigation} />

const EventosRoute = () =>  <Eventos navigation={BottomNavigation} />

const ArtefactoRoute = () => {
  const navigation = useNavigation();
  return <ArtefactosConsegidos navigation={navigation} />;
};

const HomeRoute = () => {
 const navigation = useNavigation();
 return <HomeMap navigation={navigation} />
};

const RankingRoute = () =>  <Ranking navigation={BottomNavigation} />

const MenuAppBar = () => {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'HomeMap', title: 'Home', focusedIcon: 'map' },
    { key: 'Perfil', title: 'Perfil', focusedIcon: 'account'},
    { key: 'Eventos', title: 'Eventos', focusedIcon: 'calendar' },
    { key: 'ArtefactosConsegidos', title: 'Artefactos', focusedIcon: 'book-open-page-variant' },
   // { key: 'Ranking', title: 'Ranking', focusedIcon: 'podium' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    HomeMap: HomeRoute,
    Perfil: PerfilRoute,
    Login: LoginRoute,
    Eventos: EventosRoute,
    ArtefactosConsegidos: ArtefactoRoute,
    Ranking: RankingRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      //barStyle={{backgroundColor: 'lightblue'}}
    />
  );
};

export default MenuAppBar;
