import * as commentAPI from '../../api/comments';
import {
  FETCH_COMMENT_LIST_REQUEST,
  FETCH_COMMENT_LIST_SUCCESS,
  FETCH_COMMENT_LIST_FAILURE,
  FETCH_LIST_PER_PAGE_REQUEST,
  FETCH_LIST_PER_PAGE_SUCCESS,
  FETCH_LIST_PER_PAGE_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  FETCH_COMMENT_BY_ID_SUCCESS,
  FETCH_COMMENT_BY_ID_FAILURE,
  FETCH_COMMENT_BY_ID_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
  EDIT_COMMENT_REQUEST,
} from './actions';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { AnyAction } from 'redux';

function* commentListSaga() {
  try {
    const response = yield call(commentAPI.getAllComments);
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

interface GetIdType extends AnyAction {
  payload: number;
}

function* commentByIdSaga(action: GetIdType) {
  try {
    const response = yield call(commentAPI.getComment, action.payload);
    yield put({
      type: FETCH_COMMENT_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_COMMENT_BY_ID_FAILURE,
      payload: error,
    });
  }
}

function* commentListPerPageSaga(action: any) {
  try {
    const response = yield call(commentAPI.getComments, action.payload);
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

function* addCommentSaga(action: any) {
  try {
    const response = yield call(commentAPI.addComment, action.payload);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      payload: error,
    });
  }
}

function* editCommentSaga(action: any) {
  console.log(action);
  try {
    const response = yield call(commentAPI.updateComment, action.payload);
    console.log(action.payload);
    yield put({
      type: EDIT_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: EDIT_COMMENT_FAILURE,
      payload: error,
    });
  }
}

function* removeCommentSaga(action: any) {
  try {
    const response = yield call(commentAPI.removeComment, action.payload);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      payload: error,
    });
  }
}

export default function* commentSaga() {
  yield all([
    takeEvery(FETCH_COMMENT_LIST_REQUEST, commentListSaga),
    takeEvery(FETCH_LIST_PER_PAGE_REQUEST, commentListPerPageSaga),
    takeEvery(ADD_COMMENT_REQUEST, addCommentSaga),
    takeEvery(REMOVE_COMMENT_REQUEST, removeCommentSaga),
    takeEvery(FETCH_COMMENT_BY_ID_REQUEST, commentByIdSaga),
    takeEvery(EDIT_COMMENT_REQUEST, editCommentSaga),
  ]);
}
