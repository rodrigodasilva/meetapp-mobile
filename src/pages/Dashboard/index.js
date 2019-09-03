import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Background from '~/components/Background';
import TopBar from '~/components/TopBar';
// import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <TopBar />
      <Text>Dashboard</Text>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="bars" size={20} color={tintColor} />
  ),
};
