import { createSelector } from 'reselect';
import { makeMovieState } from "./utils";

const homePageDomain = (state, { id }) => state.movieDetailsContainer[id] || makeMovieState();

export const selectMovieDetailsData = createSelector(
    homePageDomain,
    (subState) => subState
);

export const selectMovie = createSelector(
    homePageDomain,
    (subState) => subState.info
);