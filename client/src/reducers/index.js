import { combineReducers } from 'redux';
import form from './form';
import error from './error';
import score from './score';
import auth from './auth';
import theme from './theme';
import multiplayer from './multiplayer';
import duel from './duel';
import online from './online';
import chat from './chat';
import input from './input';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';

const rootReducer = combineReducers({
  form,
  error,
  score,
  auth,
  theme,
  multiplayer,
  duel,
  online,
  chat,
  input,
  sessionReducer,
  userReducer,
  messageReducer,
});

export default rootReducer;
