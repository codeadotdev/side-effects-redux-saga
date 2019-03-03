import { createRoutine } from 'redux-saga-routines';

import { FETCH_MOVIES } from "./constants";

export const fetchMovies = createRoutine(FETCH_MOVIES);