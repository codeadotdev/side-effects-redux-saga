import { createSelector } from 'reselect';

const homePageDomain = (state) => state.moviesListContainer;

export const selectMoviesData = createSelector(
    homePageDomain,
    (subState) => subState.movies
);

export const selectRequestFilters = createSelector(
    homePageDomain,
    (subState) => subState.filters
);