import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import TopBar from '~/components/TopBar';
import Meetup from '~/components/Meetup';

import { deleteSubscriptionRequest } from '~/store/modules/subscriptions/actions';

import { Container, TextEmpty } from './styles';

export default function Subscription() {
  const subscriptions = useSelector(state => state.subscriptions.data);

  const dispatch = useDispatch();

  function handleCancelSubscription(id) {
    dispatch(deleteSubscriptionRequest(id));
  }

  return (
    <Background>
      <TopBar />
      {subscriptions.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              meetup={item.Meetup}
              onPress={() => handleCancelSubscription(item.id)}
              textButton="Cancelar Inscrição"
            />
          )}
        />
      ) : (
        <>
          <Container>
            <TextEmpty>Nenhuma Inscrição</TextEmpty>
          </Container>
        </>
      )}
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="bookmark" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon,
};
