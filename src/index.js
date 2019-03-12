import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import history from './history';
import App from './containers/App';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';

import moviesSagas from './containers/MoviesList/sagas';
import movieDetailsSagas from './containers/MovieDetailsProvider/sagas';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');


store.runSaga(moviesSagas);
store.runSaga(movieDetailsSagas);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>,
        MOUNT_NODE,
    );
};

if (module.hot) {
    module.hot.accept(['./containers/App'], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
    });
}

render();

serviceWorker.unregister();
