import {
    SET_FEEDS_RESPONSE,
    FETCH_FEEDS_SUCCEEDED,
    FETCH_FEEDS_FAILED,
    FETCH_STRIPS_SUCCEEDED,
    SET_STRIPS_RESPONSE,
    FETCH_STRIPS_FAILED
} from '../store/actions/ResponseData'
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchFeeds() {
    try {
        const feedsData = yield Api.getFeeds()
        console.log('Feeds data in feed saga', feedsData)
        yield put({ type: FETCH_FEEDS_SUCCEEDED, receivedFeed: feedsData })
    } catch (error) {
        yield put({ type: FETCH_FEEDS_FAILED, error })
    }
}

function* fetchStrips() {
    try {
        const stripsData = yield Api.getStripes()
        console.log('Strips data in feed saga', stripsData)
        yield put({ type: FETCH_STRIPS_SUCCEEDED, receivedStrips: stripsData })
    } catch (error) {
        yield put({ type: FETCH_STRIPS_FAILED, error })
    }
}

export function* watchFeeds() {
    console.log('Watching feed for latest updates')
    yield takeLatest(SET_STRIPS_RESPONSE, fetchStrips)
    yield takeLatest(SET_FEEDS_RESPONSE, fetchFeeds)
}