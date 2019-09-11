import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import {} from '~/store/modules/subscriptions/actions';

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

export default function MeetupSubscription({ data, textButton, onPress }) {
  const [dateFormatted, setDateFormatted] = useState('');

  useEffect(() => {
    setDateFormatted(
      format(parseISO(data.Meetup.date), "dd ' de ' MMMM ', às ' HH:mm'h'", {
        locale: pt,
      })
    );
  }, [data]);

  return (
    <Container>
      <Banner source={{ uri: data.Meetup.banner.urlGenymotion }} />

      <Body>
        <Title>{data.Meetup.title}</Title>
        <ViewTextItem>
          <IconMCI name="calendar" size={14} color="#999" />
          <TextItem>{dateFormatted}</TextItem>
        </ViewTextItem>

        <ViewTextItem>
          <IconMI name="location-on" size={14} color="#999" />
          <TextItem>{data.Meetup.location}</TextItem>
        </ViewTextItem>

        <ViewTextItem>
          <IconMI name="person" size={14} color="#999" />
          <TextItem>Organizado por: {data.Meetup.User.name}</TextItem>
        </ViewTextItem>

        <Button onPress={onPress}>
          <TextButton>{textButton}</TextButton>
        </Button>
      </Body>
    </Container>
  );
}
