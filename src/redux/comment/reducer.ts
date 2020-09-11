import { CommentState } from '../../types';
import {
  FETCH_COMMENT_LIST_REQUEST,
  FETCH_COMMENT_LIST_SUCCESS,
  FETCH_COMMENT_LIST_FAILURE,
  FETCH_LIST_PER_PAGE_REQUEST,
  FETCH_LIST_PER_PAGE_SUCCESS,
  FETCH_LIST_PER_PAGE_FAILURE,
  SET_CURRENT_PAGE,
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

const reducer = (
  state: CommentState = initialState,
  action: any
): CommentState => {
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
          data: null,
          error: action.payload,
        },
      };
    case FETCH_LIST_PER_PAGE_REQUEST:
      return {
        ...state,
        comment: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case FETCH_LIST_PER_PAGE_SUCCESS:
      return {
        ...state,
        comment: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_LIST_PER_PAGE_FAILURE:
      return {
        ...state,
        comment: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
