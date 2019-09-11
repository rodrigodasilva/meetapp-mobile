export function subscriptionsRequest(data) {
  return {
    type: '@subscriptions/SUBSCRIPTIONS_REQUEST',
    payload: { data },
  };
}

export function newSubscriptionRequest(id) {
  return {
    type: '@subscriptions/NEW_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function newSubscriptionSuccess(subscription) {
  return {
    type: '@subscriptions/NEW_SUBSCRIPTION_SUCCESS',
    payload: { subscription },
  };
}

export function deleteSubscriptionRequest(id) {
  return {
    type: '@subscriptions/DELETE_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function deleteSubscriptionSuccess(id) {
  return {
    type: '@subscriptions/DELETE_SUBSCRIPTION_SUCCESS',
    payload: { id },
  };
}
