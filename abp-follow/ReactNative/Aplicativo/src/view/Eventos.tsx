import { View, Text, ImageBackground } from 'react-native';
import { Card, List } from 'react-native-paper';
import CommonsStyle from '../styles/CommonsStyle';
import { useEffect } from 'react';
import { GetEventos } from '../DAO/GetEventos';
import { useState, useContext } from "react";
import EventosModel from '../model/EventosModel';

const Eventos = ({navigation}) => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        getData();
      }, [])
    
      async function getData() {
        const eventosData = await GetEventos();
        setEventos(eventosData || []);
      }

        return(
        <ImageBackground 
        source={require('../Files/background5.png')}  resizeMode="cover"
        style={CommonsStyle.backgroundImage}
        >
        <View style={{flex: 1, padding: 90, width: '120%'}}>
            <Text style={CommonsStyle.titulo}>Eventos</Text>
            <Card style={{backgroundColor: '#fdf6d9'}}>
                <Card.Content>
                    <List.Section>
                    {eventos.map((evento, index) => (
                        <List.Accordion style={[CommonsStyle.mainColor]} title = {`Evento: ${evento.nombre} `} id={index.toString()} left={() => <List.Icon icon="gift" />}>
                            <List.Item title="First Item"/>
                        </List.Accordion>
                    ))}       
                    </List.Section>
                </Card.Content>
            </Card>
        </View>
        </ImageBackground>
    );

}

export default Eventos;