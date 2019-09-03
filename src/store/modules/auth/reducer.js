import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  created: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_SUCCESS': {
        draft.created = true;
        break;
      }

      // case '@auth/SIGN_UP_FAILURE': {
      //   draft.created = false;
      //   break;
      // }

      // case '@auth/SIGN_IN_REQUEST': {
      //   draft.loading = true;
      //   break;
      // }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;

        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
