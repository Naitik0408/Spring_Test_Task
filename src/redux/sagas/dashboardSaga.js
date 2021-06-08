import { takeEvery, put, call } from 'redux-saga/effects';
import { CONSTANTS } from '../../constants/AppConst';
import { NewsFeedAction } from '../actions/NewsFeedAction';

export function* newsFeed() {
    try {
        const NewsFeedRes = yield call(NewsFeedAction);
        yield put({
            type: CONSTANTS.NEWS_FEED_DETAILS_SUCCESS,
            payload: NewsFeedRes.data.sources,
        });
    } catch (error) {
        console.log(error);
    }
}

export default function* watchTonewsFeed() {
    yield takeEvery(CONSTANTS.NEWS_FEED_DETAILS_REQUEST, newsFeed);
}