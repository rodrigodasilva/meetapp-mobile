import React from 'react';

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Body,
  Title,
  ViewTextItem,
  TextItem,
  Button,
  TextButton,
} from './styles';

export default function Meetup() {
  return (
    <Container>
      <Banner
        source={{ uri: 'https://api.adorable.io/avatar/100/rocketseat.png' }}
      />

      <Body>
        <Title>Campus Party</Title>
        <ViewTextItem>
          <IconMCI name="calendar" size={14} color="#999" />
          <TextItem>25 de junho de 2019</TextItem>
        </ViewTextItem>

        <ViewTextItem>
          <IconMI name="location-on" size={14} color="#999" />
          <TextItem>São Paulo - SP</TextItem>
        </ViewTextItem>

        <ViewTextItem>
          <IconMI name="person" size={14} color="#999" />
          <TextItem>Organizado por: Rodrigo Ribeiro</TextItem>
        </ViewTextItem>

        <Button onPress={() => {}}>
          <TextButton>Realizar Inscrição</TextButton>
        </Button>
      </Body>
    </Container>
  );
}
