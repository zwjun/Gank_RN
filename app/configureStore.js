/*
 * @Author: JUN 
 * @Date: 2017-07-27 17:45:56 
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger, logger } from 'redux-logger';
import thunk from 'redux-thunk';
//import logger from 'react-logger';

import reducer from './reducers';

const loggerMiddleware  = createLogger();

const store = createStore(
      reducer,
      applyMiddleware( thunk, loggerMiddleware )
    );

export default store;