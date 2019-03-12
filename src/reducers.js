import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history';
import globalReducer from './globalReducer';
import moviesListReducer from './containers/MoviesList/reducer';
import movieDetailsProvider from './containers/MovieDetailsProvider/reducer';

export default function createReducer() {
    const rootReducer = combineReducers({
        global: globalReducer,
        router: connectRouter(history),
        moviesListContainer: moviesListReducer,
        movieDetailsProvider: movieDetailsProvider,
    });

    return rootReducer;
}