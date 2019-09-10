import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import TopBar from '~/components/TopBar';
import Meetup from '~/components/Meetup';

// import { Container } from './styles';

export default function Subscription() {
  return (
    <Background>
      <TopBar />
      <Text>Subscription</Text>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="bookmark" size={20} color={tintColor} />
  ),
};
