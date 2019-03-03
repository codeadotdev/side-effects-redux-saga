import { fetchMovies } from './actions';

const initialState = {
    movies: {
        fetching: false,
        fetched: true,
        error: null,
        list: [],
    },
    filters: {
        from: 0,
        quantity: 50,
        filter_id: 24185,
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case fetchMovies.TRIGGER:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    fetching: true,
                },
            };

        case fetchMovies.SUCCESS:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    fetched: true,
                    list: action.payload,
                },
            };

        case fetchMovies.FAILURE:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    error: action.payload,
                },
            };

        case fetchMovies.FULFILL:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    fetching: false,
                },
            };

        default:
            return state;
    }
}

export default reducer;