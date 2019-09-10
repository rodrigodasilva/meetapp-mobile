import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { newSubscriptionSuccess } from './actions';

export function* newSubscriptionRequest({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `meetups/${id}/subscriptions`);

    yield put(newSubscriptionSuccess(response.data));

    Alert.alert('Concluido', 'Inscrição realizada com sucesso');
  } catch (err) {
    Alert.alert('Erro', 'Erro ao se inscrever no evento');
  }
}

export default all([
  takeLatest('@subscriptions/NEW_SUBSCRIPTION_REQUEST', newSubscriptionRequest),
]);
