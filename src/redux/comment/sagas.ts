import * as commentAPi from '../../api/comments';
import {
  FETCH_COMMENT_LIST_REQUEST,
  FETCH_COMMENT_LIST_SUCCESS,
  FETCH_COMMENT_LIST_FAILURE,
  FETCH_LIST_PER_PAGE_SUCCESS,
  FETCH_LIST_PER_PAGE_FAILURE,
  FETCH_LIST_PER_PAGE_REQUEST,
} from './actions';
import { takeEvery, call, put, all } from 'redux-saga/effects';

function* commentListSaga() {
  try {
    const response = yield call(commentAPi.getAllComments);
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

function* commentListPerPageSaga(action: any) {
  try {
    const response = yield call(commentAPi.getComments, action.payload);
    console.log(response.data);
    yield put({
      type: FETCH_LIST_PER_PAGE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_LIST_PER_PAGE_FAILURE,
      payload: error,
    });
  }
}

export default function* commentSaga() {
  yield all([
    takeEvery(FETCH_COMMENT_LIST_REQUEST, commentListSaga),
    takeEvery(FETCH_LIST_PER_PAGE_REQUEST, commentListPerPageSaga),
  ]);
}
