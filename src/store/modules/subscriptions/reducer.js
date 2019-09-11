import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@subscriptions/SUBSCRIPTIONS_REQUEST': {
        draft.data = action.payload.data;
        break;
      }

      case '@subscriptions/NEW_SUBSCRIPTION_SUCCESS': {
        draft.data = [...state.data, action.payload.subscription];
        break;
      }

      case '@subscriptions/DELETE_SUBSCRIPTION_SUCCESS': {
        draft.data = state.data.filter(
          subscription => subscription.id !== action.payload.id
        );
        break;
      }

      default:
    }
  });
}
