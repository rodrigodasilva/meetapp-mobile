import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

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
  TextSubcripted,
} from './styles';

export default function Meetup({ meetup, subscriptions, textButton, onPress }) {
  const [checkStateSubscription, setCheckStateSubscription] = useState('');
  const [loading, setLoading] = useState(true);
  const [dateFormatted, setDateFormatted] = useState('');

  useEffect(() => {
    setLoading(true);
    setDateFormatted(
      format(parseISO(meetup.date), "dd ' de ' MMMM ', às ' HH:mm'h'", {
        locale: pt,
      })
    );

    if (subscriptions) {
      setCheckStateSubscription(
        subscriptions.find(subscription => {
          return subscription.meetup_id === meetup.id;
        })
      );
    }

    setLoading(false);
  }, [meetup, subscriptions]);

  return (
    <Container past={meetup.past} loading={loading}>
      <Banner source={{ uri: meetup.banner.urlGenymotion }} />

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
          <Title>{meetup.title}</Title>
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
            <TextItem>{meetup.location}</TextItem>
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
            <TextItem>Organizado por: {meetup.User.name}</TextItem>
          </ViewTextItem>
        </ShimmerPlaceHolder>

        {checkStateSubscription ? (
          <TextSubcripted subscripted>Inscrito</TextSubcripted>
        ) : (
          <ShimmerPlaceHolder
            style={{
              height: 40,
              borderRadius: 4,
              width: '100%',
            }}
            autoRun
            visible={!loading}
          >
            <Button onPress={onPress} past={meetup.past}>
              <TextButton>{textButton}</TextButton>
            </Button>
          </ShimmerPlaceHolder>
        )}
      </Body>
    </Container>
  );
}

Meetup.propTypes = {
  meetup: PropTypes.shape({
    id: PropTypes.number,
    past: PropTypes.bool,
    banner: PropTypes.shape({
      urlGenymotion: PropTypes.string,
    }).isRequired,
    date: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    User: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,

  textButton: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
