import React from 'react';
import { TouchableOpacity } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';

import Background from '~/components/Background';
import TopBar from '~/components/TopBar';
import Meetup from '~/components/Meetup';

import { DateMeetup, TextDate } from './styles';

export default function Dashboard() {
  function handleSubDate() {}

  function handleAddDate() {}

  return (
    <Background>
      <TopBar />
      <DateMeetup>
        <TouchableOpacity onPress={handleSubDate}>
          <IconFA name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
        <TextDate>31 de Dezembro</TextDate>

        <TouchableOpacity onPress={handleAddDate}>
          <IconFA name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
      </DateMeetup>

      <Meetup />
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <IconAD name="bars" size={20} color={tintColor} />
  ),
};
