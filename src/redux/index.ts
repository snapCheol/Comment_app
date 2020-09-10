import { combineReducers } from 'redux';
import comment from './comment/reducer';
import { all } from 'redux-saga/effects';
import commentSaga from './comment/sagas';

const rootReducer = combineReducers({
  comment,
});

export function* rootSaga() {
  yield all([commentSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
