import { put, takeEvery } from '@redux-saga/core/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {
  getMessagesError,
  getMessagesSuccess,
  sendMessageError,
  sendMessageSuccess,
} from '../actions/creators';
import * as API from '../../api/chat';

export default function* watchMessages() {
  yield takeEvery(ACTION_TYPES.CREATE_MESSAGE_REQUEST, sendMessageSaga);
  yield takeEvery(ACTION_TYPES.GET_MESSAGES_REQUEST, getMessagesSaga);
}

function* getMessagesSaga(action) {
  try {
    const messages = yield API.getMessages();

    yield put(getMessagesSuccess(messages));
  } catch (error) {
    yield put(getMessagesError(error));
  }
}

function* sendMessageSaga(action) {
  try {
    yield API.sendMessage(action.payload.message);
  } catch (error) {
    yield put(sendMessageError(error));
  }
}
