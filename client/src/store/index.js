import { createStore, applyMiddleware } from 'redux';
import authMiddleware from '../middleware/auth';
import errorMiddleware from '../middleware/error';
import themeMiddleware from '../middleware/theme';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      authMiddleware,
      errorMiddleware,
      themeMiddleware,
    ),
  ),
);

export default store;
