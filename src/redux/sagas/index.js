import { all } from 'redux-saga/effects';

import watchTonewsFeed from './dashboardSaga';

export default function* sagas() {
  yield all([
    watchTonewsFeed()
  ]);
}
