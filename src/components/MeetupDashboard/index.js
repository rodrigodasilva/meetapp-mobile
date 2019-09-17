import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

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

    // setLoading(false);
    setTimeout(() => setLoading(false), 4000);
  }, [data, idUserApp, subscriptions]);

  return (
    <Container>
      <ShimmerPlaceHolder
        style={{ height: 150, borderRadius: 4, width: '100%' }}
        autoRun
        visible={!loading}
      >
        <Banner source={{ uri: data.banner.urlGenymotion }} />
      </ShimmerPlaceHolder>

      <Body>
        <ShimmerPlaceHolder
          style={{
            height: 20,
            borderRadius: 4,
            width: 250,
            marginBottom: 10,
          }}
          autoRun
          visible={!loading}
        >
          <Title>{data.title}</Title>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          style={{
            height: 10,
            borderRadius: 4,
            width: 200,
            marginBottom: 10,
          }}
          autoRun
          visible={!loading}
        >
          <ViewTextItem>
            <IconMCI name="calendar" size={14} color="#999" />
            <TextItem>{dateFormatted}</TextItem>
          </ViewTextItem>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          style={{
            height: 10,
            borderRadius: 4,
            width: 150,
            marginBottom: 10,
          }}
          autoRun
          visible={!loading}
        >
          <ViewTextItem>
            <IconMI name="location-on" size={14} color="#999" />
            <TextItem>{data.location}</TextItem>
          </ViewTextItem>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          style={{
            height: 10,
            borderRadius: 4,
            width: 200,
            marginBottom: 20,
          }}
          autoRun
          visible={!loading}
        >
          <ViewTextItem>
            <IconMI name="person" size={14} color="#999" />
            <TextItem>
              Organizado por:{' '}
              {checkIfUserAppIsEqualMeetupOrganizer ? 'Você' : data.User.name}
            </TextItem>
          </ViewTextItem>
        </ShimmerPlaceHolder>

        {checkStateSubscription ? (
          <TextAlreadySubscription>Você está inscrito</TextAlreadySubscription>
        ) : (
          <ShimmerPlaceHolder
            style={{
              height: 40,
              borderRadius: 4,
              width: '100%',
              // marginBottom: 10,
            }}
            autoRun
            visible={!loading}
          >
            <Button
              onPress={onPress}
              checkIfUserAppIsEqualMeetupOrganizer={
                checkIfUserAppIsEqualMeetupOrganizer
              }
              past={data.past}
            >
              <TextButton>{textButton}</TextButton>
            </Button>
          </ShimmerPlaceHolder>
        )}
      </Body>
    </Container>
  );
}
