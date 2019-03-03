import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
    const middlewares = [sagaMiddleware, routerMiddleware(history)];

    const enhancers = [applyMiddleware(...middlewares)];

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers),
    );

    store.runSaga = sagaMiddleware.run;

    return store;
}