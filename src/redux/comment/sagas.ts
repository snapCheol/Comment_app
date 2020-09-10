import * as commentAPi from '../../api/comments';
import {
  FETCH_COMMENT_LIST_REQUEST,
  FETCH_COMMENT_LIST_SUCCESS,
  FETCH_COMMENT_LIST_FAILURE,
} from './actions';
import { takeEvery, call, put, all } from 'redux-saga/effects';

function* commentListSaga() {
  try {
    const response = yield call(commentAPi.getAllComments);
    console.log(response);
    yield put({
      type: FETCH_COMMENT_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_COMMENT_LIST_FAILURE,
      payload: error,
    });
  }
}

export default function* commentSaga() {
  yield all([takeEvery(FETCH_COMMENT_LIST_REQUEST, commentListSaga)]);
}
