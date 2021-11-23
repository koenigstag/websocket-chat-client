import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import watchMessages from './messages';

export const sagaMW = createSagaMiddleware();

export default function* rootSaga() {
  yield all([
    watchMessages(),
    // watch sagas
  ]);
}
