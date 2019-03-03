import { getMovieDetails } from './actions';
import { getNeWMovieState } from "./utils";

const initialState = {};



function reducer(state = initialState, action) {
    switch (action.type) {
        case getMovieDetails.TRIGGER:
            return getNeWMovieState(action.payload, state, {
                fetching: true,
            });

        case getMovieDetails.SUCCESS:
            return getNeWMovieState(action.payload.movieId, state, {
                fetched: true,
                info: action.payload.data,
            });

        case getMovieDetails.FAILURE:
            return getNeWMovieState(action.payload.movieId, state, {
                error: action.payload.err,
            });

        case getMovieDetails.FULFILL:
            return getNeWMovieState(action.payload, state, {
                fetching: false,
            });

        default:
            return state;
    }
}

export default reducer;