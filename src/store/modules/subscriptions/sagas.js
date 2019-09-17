import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { newSubscriptionSuccess, deleteSubscriptionSuccess } from './actions';

export function* newSubscriptionRequest({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `meetups/${id}/subscriptions`);

    yield put(newSubscriptionSuccess(response.data));

    Alert.alert('Concluido', 'Inscrição realizada com sucesso');
  } catch (err) {
    Alert.alert(
      'Conflito de horários',
      'Você já se inscreveu em um meetup nesta data'
    );
  }
}

export function* deleteSubscriptionRequest({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}/subscriptions`);

    yield put(deleteSubscriptionSuccess(id));

    Alert.alert('Concluído', 'Inscrição cancelada com sucesso');
  } catch (err) {
    Alert.alert('Erro', 'Erro ao cancelar inscrição no evento');
  }
}

export default all([
  takeLatest('@subscriptions/NEW_SUBSCRIPTION_REQUEST', newSubscriptionRequest),
  takeLatest(
    '@subscriptions/DELETE_SUBSCRIPTION_REQUEST',
    deleteSubscriptionRequest
  ),
]);
