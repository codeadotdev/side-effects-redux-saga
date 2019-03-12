import { call, put, takeLatest, select } from 'redux-saga/effects'

import * as actions from './actions';
import { fetchMoviesRequest } from './requests';
import { selectRequestFilters } from "./selectors";

export function* fetchMovies() {
    try {
        const filters = yield select(selectRequestFilters);

        yield put(actions.fetchMovies.request());

        const data = yield call(fetchMoviesRequest, filters);

        yield put(actions.fetchMovies.success(data));
    } catch (err) {
        yield put(actions.fetchMovies.failure(err));
    } finally {
        yield put(actions.fetchMovies.fulfill());
    }
}

export default function* mainSaga() {
    yield takeLatest(actions.fetchMovies.TRIGGER, fetchMovies)
}