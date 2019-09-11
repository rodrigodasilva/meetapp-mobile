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
  TextAlreadySubscription,
} from './styles';

export default function MeetupDashboard({
  data,
  textButton,
  onPress,
  idUserApp,
  subscriptions,
}) {
  const [dateFormatted, setDateFormatted] = useState('');
  const [
    checkIfUserAppIsEqualMeetupOrganizer,
    setCheckIfUserAppIsEqualMeetupOrganizer,
  ] = useState('');
  const [checkStateSubscription, setCheckStateSubscription] = useState('');

  useEffect(() => {
    setDateFormatted(
      format(parseISO(data.date), "dd ' de ' MMMM ', às ' HH:mm'h'", {
        locale: pt,
      })
    );

    setCheckIfUserAppIsEqualMeetupOrganizer(idUserApp === data.User.id);

    setCheckStateSubscription(
      subscriptions.find(subscription => {
        return subscription.meetup_id === data.id;
      })
    );
  }, [data, idUserApp, subscriptions]);

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
            Organizado por:{' '}
            {checkIfUserAppIsEqualMeetupOrganizer ? 'Você' : data.User.name}
          </TextItem>
        </ViewTextItem>

        {checkStateSubscription ? (
          <TextAlreadySubscription>Você está inscrito</TextAlreadySubscription>
        ) : (
          <Button
            onPress={onPress}
            checkIfUserAppIsEqualMeetupOrganizer={
              checkIfUserAppIsEqualMeetupOrganizer
            }
            past={data.past}
          >
            <TextButton>{textButton}</TextButton>
          </Button>
        )}
      </Body>
    </Container>
  );
}
