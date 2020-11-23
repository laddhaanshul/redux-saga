import { call, all } from 'redux-saga/effects';
import { watchFeeds } from './FeedSaga';

export default function* rootSaga() {
    console.log('Root saga calling watch feeds')
    yield call(watchFeeds)
}