import { createRoutine } from 'redux-saga-routines';

import { GET_MOVIE_DETAILS } from "./constants";

export const getMovieDetails = createRoutine(GET_MOVIE_DETAILS);