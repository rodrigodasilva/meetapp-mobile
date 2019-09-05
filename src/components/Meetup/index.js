import React from 'react';
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

export default function Meetup({
  data,
  textButton,
  onPress,
  idUserApp,
  subscriptions,
}) {
  const dateFormatted = format(
    parseISO(data.date),
    "dd ' de ' MMMM ', às ' HH:mm'h'",
    {
      locale: pt,
    }
  );

  const checkIfUserAppIsEqualMeetupOrganizer = idUserApp === data.User.id;

  // const stateSubscription = subscriptions.filter(subscription => {
  //   return subscription.meetup_id === data.id ? setTeste(true) : false;
  // });

  // console.tron.log('Subscriptions', subscriptions);
  // console.tron.log('ESTATE_Subscriptions', stateSubscription);

  return (
    <Container>
      <Banner
        // source={{ uri: 'https://api.adorable.io/avatar/100/rocketseat.png' }}
        source={{ uri: data.banner.urlGenymotion }}
      />

      <Body>
        <Title>{data.title}</Title>
        <ViewTextItem>
          <IconMCI name="calendar" size={14} color="#999" />
          <TextItem>{dateFormatted}</TextItem>
        </ViewTextItem>

        <ViewTextItem>
          <IconMI name="location-on" size={14} color="#999" />
          <TextItem>{data.location}</TextItem>
        </ViewTextItem>

        <ViewTextItem>
          <IconMI name="person" size={14} color="#999" />
          <TextItem>
            Organizado por:
            {checkIfUserAppIsEqualMeetupOrganizer ? ' Você' : data.User.name}
          </TextItem>
        </ViewTextItem>

        {/* {stateSubscription ? (
          <TextButton subscription>Você já está inscrito</TextButton>
        ) : ( */}
        <Button
          onPress={onPress}
          checkIfUserAppIsEqualMeetupOrganizer={
            checkIfUserAppIsEqualMeetupOrganizer
          }
        >
          <TextButton>{textButton}</TextButton>
        </Button>
        {/* )} */}
      </Body>
    </Container>
  );
}
