import { CommentState } from '../../types';
import {
  FETCH_COMMENT_LIST_REQUEST,
  FETCH_COMMENT_LIST_SUCCESS,
  FETCH_COMMENT_LIST_FAILURE,
} from './actions';

const initialState: CommentState = {
  comments: {
    loading: false,
    data: null,
    error: null,
  },
  comment: {
    loading: false,
    data: null,
    error: null,
  },
  method: 'post',
  currentPage: 1,
};

const reducer = (state: CommentState = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COMMENT_LIST_REQUEST:
      return {
        ...state,
        comments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case FETCH_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_COMMENT_LIST_FAILURE:
      return {
        ...state,
        comments: {
          loading: false,
          data: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
