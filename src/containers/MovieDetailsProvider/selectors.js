import get from 'lodash/get';
import { createSelector } from 'reselect';


import { makeMovieState } from "./utils";

const movieDetailsDomain = (state, { id }) => state.movieDetailsProvider[id] || makeMovieState();

export const selectMovieDetailsData = createSelector(
    movieDetailsDomain,
    (subState) => subState
);

export const selectMovie = createSelector(
    selectMovieDetailsData,
    (subState) => subState.info
);

export const selectGenres = createSelector(
    selectMovie,
    (movie) => get(movie, 'extendedcommon.genres.genre', []).map((genre) => genre.name)
);