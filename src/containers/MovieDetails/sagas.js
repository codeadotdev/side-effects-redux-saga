import { call, put, take, fork, cancel } from 'redux-saga/effects'

import * as actions from './actions';
import { getMovieDetailsRequest } from './requests';

export function* getMovieDetails(action) {
    const movieId = action.payload;
    try {
        yield put(actions.getMovieDetails.request(movieId));
        const data = yield call(getMovieDetailsRequest, movieId);
        yield put(actions.getMovieDetails.success({ data, movieId }));
    } catch (err) {
        yield put(actions.getMovieDetails.failure({ err, movieId }));
    } finally {
        yield put(actions.getMovieDetails.fulfill(movieId));
    }
}

export default function* mainSaga() {
    yield call(takeMovieTask)
}

function* takeMovieTask() {
    const tasks = {};

    while (true) {
        const action = yield take(actions.getMovieDetails.TRIGGER);

        if (tasks[action.payload]) {
            yield cancel(tasks[action.payload]);
        }

        tasks[action.payload] = yield fork(getMovieDetails, action);
    }

}