import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import subscriptions from './subscriptions/reducer';

export default combineReducers({
  auth,
  user,
  subscriptions,
});
