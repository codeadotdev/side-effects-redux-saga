export function makeMovieState() {
    return {
        fetching: false,
        fetched: false,
        error: null,
        info: {},
    };
}

export function getNeWMovieState(movieId, state, newState) {
    if (!state[movieId]) {
        return {
            ...state,
            [movieId]: {
                ...makeMovieState(),
                ...newState
            },
        };
    }

    return {
        ...state,
        [movieId]: {
            ...state[movieId],
            ...newState
        }
    }
}