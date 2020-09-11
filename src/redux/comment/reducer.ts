import { CommentState } from '../../types';
import {
  FETCH_COMMENT_LIST_REQUEST,
  FETCH_COMMENT_LIST_SUCCESS,
  FETCH_COMMENT_LIST_FAILURE,
  FETCH_LIST_PER_PAGE_REQUEST,
  FETCH_LIST_PER_PAGE_SUCCESS,
  FETCH_LIST_PER_PAGE_FAILURE,
  SET_CURRENT_PAGE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  CHANGE_FORM,
  RESET_FORM,
  FETCH_COMMENT_BY_ID_REQUEST,
  FETCH_COMMENT_BY_ID_SUCCESS,
  FETCH_COMMENT_BY_ID_FAILURE,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
} from './actions';

const initialState: CommentState = {
  allComments: {
    loading: false,
    data: null,
    error: null,
  },
  commentPerPage: {
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
  commentForm: {
    id: undefined,
    profile_url: '',
    author: '',
    content: '',
    createdAt: '',
  },
};

const reducer = (
  state: CommentState = initialState,
  action: any
): CommentState => {
  switch (action.type) {
    case FETCH_COMMENT_LIST_REQUEST:
      return {
        ...state,
        allComments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case FETCH_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        allComments: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_COMMENT_LIST_FAILURE:
      return {
        ...state,
        allComments: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case FETCH_LIST_PER_PAGE_REQUEST:
      return {
        ...state,
        commentPerPage: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case FETCH_LIST_PER_PAGE_SUCCESS:
      return {
        ...state,
        commentPerPage: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_LIST_PER_PAGE_FAILURE:
      return {
        ...state,
        commentPerPage: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case FETCH_COMMENT_BY_ID_REQUEST:
      return {
        ...state,
        comment: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case FETCH_COMMENT_BY_ID_SUCCESS:
      return {
        ...state,
        comment: {
          loading: false,
          data:
            state.allComments.data && state.allComments.data[action.payload.id],
          error: null,
        },
        method: 'put',
        commentForm: {
          id: action.payload.id,
          author: action.payload.author,
          content: action.payload.content,
          createdAt: action.payload.createdAt,
          profile_url: action.payload.profile_url,
        },
      };
    case FETCH_COMMENT_BY_ID_FAILURE:
      return {
        ...state,
        comment: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        comment: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        allComments: {
          loading: false,
          data:
            state.allComments.data &&
            state.allComments.data.concat(action.payload),
          error: null,
        },
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        allComments: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case EDIT_COMMENT_REQUEST:
      return {
        ...state,
        allComments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        allComments: {
          loading: false,
          data:
            state.allComments.data &&
            state.allComments.data.map((comment) =>
              comment.id === action.payload ? action.payload : comment
            ),
          error: null,
        },
        method: 'post',
      };
    case EDIT_COMMENT_FAILURE:
      return {
        ...state,
        allComments: {
          loading: true,
          data: null,
          error: null,
        },
        method: 'post',
      };
    case REMOVE_COMMENT_REQUEST:
      return {
        ...state,
        allComments: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case REMOVE_COMMENT_SUCCESS:
      return {
        ...state,
        allComments: {
          loading: true,
          data:
            state.allComments.data &&
            state.allComments.data.filter(
              (comment) => comment.id !== action.payload.id
            ),
          error: null,
        },
      };
    case REMOVE_COMMENT_FAILURE:
      return {
        ...state,
        allComments: {
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
    case CHANGE_FORM:
      return {
        ...state,
        commentForm: {
          ...state.commentForm,
          [action.payload.name]: [action.payload.value],
        },
      };
    case RESET_FORM:
      return {
        ...state,
        commentForm: {
          id: undefined,
          profile_url: '',
          author: '',
          content: '',
          createdAt: '',
        },
      };

    default:
      return state;
  }
};

export default reducer;
