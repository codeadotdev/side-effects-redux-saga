import { getMovieDetails } from './actions';
import { getNewMovieState } from "./utils";

const initialState = {};

function reducer(state = initialState, action) {
    switch (action.type) {
        case getMovieDetails.TRIGGER:
            return getNewMovieState(action.payload, state, {
                fetching: true,
            });

        case getMovieDetails.SUCCESS:
            return getNewMovieState(action.payload.movieId, state, {
                fetched: true,
                info: action.payload.data,
            });

        case getMovieDetails.FAILURE:
            return getNewMovieState(action.payload.movieId, state, {
                error: action.payload.err,
            });

        case getMovieDetails.FULFILL:
            return getNewMovieState(action.payload, state, {
                fetching: false,
            });

        default:
            return state;
    }
}

export default reducer;