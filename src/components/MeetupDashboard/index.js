import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

    setLoading(false);
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

MeetupDashboard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    banner: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    past: PropTypes.bool,
    title: PropTypes.string,
    User: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.number,
    }).isRequired,
  }).isRequired,

  textButton: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  idUserApp: PropTypes.string.isRequired,

  subscriptions: PropTypes.shape({
    id: PropTypes.number,
    find: PropTypes.func,
  }).isRequired,
};
