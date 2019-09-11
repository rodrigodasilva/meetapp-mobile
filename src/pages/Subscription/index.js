import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import TopBar from '~/components/TopBar';
import MeetupSubscription from '~/components/MeetupSubscription';

import { deleteSubscriptionRequest } from '~/store/modules/subscriptions/actions';

export default function Subscription() {
  const subscriptions = useSelector(state => state.subscriptions.data);

  const dispatch = useDispatch();

  function handleCancelSubscription(id) {
    dispatch(deleteSubscriptionRequest(id));
  }

  return (
    <Background>
      <TopBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={subscriptions}
        // onEndReachedThreshold={0.1}
        // onEndReached={loadMore}
        // ListFooterComponent={renderFooter}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <MeetupSubscription
            data={item}
            onPress={() => handleCancelSubscription(item.id)}
            textButton="Cancelar Inscrição"
            // idUserApp={idUserApp}
            // subscriptions={subscriptions}
          />
        )}
      />
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="bookmark" size={20} color={tintColor} />
  ),
};
