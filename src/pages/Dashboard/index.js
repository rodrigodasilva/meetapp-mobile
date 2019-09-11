import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';

import { format, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';

import Background from '~/components/Background';
import TopBar from '~/components/TopBar';
import MeetupDashboard from '~/components/MeetupDashboard';

import api from '~/services/api';

import {
  subscriptionsRequest,
  newSubscriptionRequest,
} from '~/store/modules/subscriptions/actions';

import { Container, DateMeetup, TextDate, TextEmpty } from './styles';

export default function Dashboard() {
  const user = useSelector(state => state.user.profile);
  const idUserApp = user.id;
  const subscriptions = useSelector(state => state.subscriptions.data);
  // console.tron.log('SUBSCRIPTIONS', subscriptions);

  const dispatch = useDispatch();

  const [meetups, setMeetups] = useState('');
  const [dateSearch, setDateSearch] = useState(new Date());

  const [loadingCenter, setLoadingCenter] = useState(true);
  const [loadingBottom, setLoadingBottom] = useState(false);
  const [page, setPage] = useState(1);

  const dateFormattedToDisplay = useMemo(() => {
    return format(dateSearch, "dd ' de ' MMMM", { locale: pt });
  }, [dateSearch]);

  useEffect(() => {
    async function loadMeetups() {
      if (page === 1) {
        setLoadingCenter(true);
      } else {
        setLoadingBottom(true);
      }

      const dateFormattedToSearch = format(dateSearch, 'yyyy-MM-dd', {
        locale: pt,
      });

      const response = await api.get(
        `meetups?date=${dateFormattedToSearch}&page=${page}`
      );

      const responseMeetups =
        page >= 2 ? [...meetups, ...response.data] : response.data;

      setMeetups(responseMeetups);
      setLoadingCenter(false);
      setLoadingBottom(false);
    }

    async function loadSubscriptions() {
      const response = await api.get('subscriptions');

      dispatch(subscriptionsRequest(response.data));
    }

    loadMeetups();
    loadSubscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateSearch, page]);

  async function handleSubscription(meetup) {
    dispatch(newSubscriptionRequest(meetup.id));
  }

  function handleSubDayFromDate() {
    setDateSearch(subDays(dateSearch, 1));
    setPage(1);
  }

  function handleAddDayToDate() {
    setDateSearch(addDays(dateSearch, 1));
    setPage(1);
  }

  function loadMore() {
    setPage(page + 1);
  }

  function renderFooter() {
    if (!loadingBottom) return null;
    return (
      <ActivityIndicator
        size={30}
        color="#F94D6A"
        style={{ backgroundColor: 'rgba(0,0,0,0.0)' }}
      />
    );
  }

  return (
    <Background>
      <TopBar />

      <DateMeetup>
        <TouchableOpacity onPress={handleSubDayFromDate}>
          <IconFA name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>

        <TextDate>{dateFormattedToDisplay}</TextDate>

        <TouchableOpacity onPress={handleAddDayToDate}>
          <IconFA name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
      </DateMeetup>

      {loadingCenter ? (
        <Container>
          <ActivityIndicator size={50} color="#fff" />
        </Container>
      ) : (
        <>
          {meetups.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={meetups}
              onEndReachedThreshold={0.1}
              onEndReached={loadMore}
              ListFooterComponent={renderFooter}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <MeetupDashboard
                  data={item}
                  onPress={() => handleSubscription(item)}
                  textButton="Realizar Inscrição"
                  idUserApp={idUserApp}
                  subscriptions={subscriptions}
                />
              )}
            />
          ) : (
            <Container>
              <TextEmpty>Nenhum Meetup</TextEmpty>
            </Container>
          )}
        </>
      )}
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <IconAD name="bars" size={20} color={tintColor} />
  ),
};
