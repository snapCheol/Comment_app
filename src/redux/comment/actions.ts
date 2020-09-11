import { CommentReqType, FormType } from '../../types';

export const FETCH_COMMENT_LIST_REQUEST = '/comment/FETCH_COMMENT_LIST_REQUEST' as const;
export const FETCH_COMMENT_LIST_SUCCESS = '/comment/FETCH_COMMENT_LIST_SUCCESS' as const;
export const FETCH_COMMENT_LIST_FAILURE = '/comment/FETCH_COMMENT_LIST_FAILURE' as const;

export const FETCH_COMMENT_BY_ID_REQUEST = '/comment/FETCH_COMMENT_BY_ID_REQUEST' as const;
export const FETCH_COMMENT_BY_ID_SUCCESS = '/comment/FETCH_COMMENT_BY_ID_SUCCESS' as const;
export const FETCH_COMMENT_BY_ID_FAILURE = '/comment/FETCH_COMMENT_BY_ID_FAILURE' as const;

export const ADD_COMMENT_REQUEST = '/comment/ADD_COMMENT_REQUEST' as const;
export const ADD_COMMENT_SUCCESS = '/comment/ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = '/comment/ADD_COMMENT_FAILURE' as const;

export const EDIT_COMMENT_REQUEST = '/comment/EDIT_COMMENT_REQUEST' as const;
export const EDIT_COMMENT_SUCCESS = '/comment/EDIT_COMMENT_SUCCESS' as const;
export const EDIT_COMMENT_FAILURE = '/comment/EDIT_COMMENT_FAILURE' as const;

export const REMOVE_COMMENT_REQUEST = '/comment/REMOVE_COMMENT_REQUEST' as const;
export const REMOVE_COMMENT_SUCCESS = '/comment/REMOVE_COMMENT_SUCCESS' as const;
export const REMOVE_COMMENT_FAILURE = '/comment/REMOVE_COMMENT_FAILURE' as const;

export const FETCH_LIST_PER_PAGE_REQUEST = '/comment/FETCH_LIST_PER_PAGE_REQUEST' as const;
export const FETCH_LIST_PER_PAGE_SUCCESS = '/comment/FETCH_LIST_PER_PAGE_SUCCESS' as const;
export const FETCH_LIST_PER_PAGE_FAILURE = '/comment/FETCH_LIST_PER_PAGE_FAILURE' as const;

export const SET_CURRENT_PAGE = '/comment/SET_CURRENT_PAGE' as const;
export const CHANGE_FORM = '/comment/CHANGE_FORM';
export const RESET_FORM = '/comment/RESET_FORM';

export const fetchCommentList = () => ({
  type: FETCH_COMMENT_LIST_REQUEST,
});

export const addComment = (data: CommentReqType) => ({
  type: ADD_COMMENT_REQUEST,
  payload: data,
});

export const editComment = (data: CommentReqType) => ({
  type: EDIT_COMMENT_REQUEST,
  payload: data,
});

export const removeComment = (id: number) => ({
  type: REMOVE_COMMENT_REQUEST,
  payload: id,
});

export const fetchListPerPage = (_page: number) => ({
  type: FETCH_LIST_PER_PAGE_REQUEST,
  payload: _page,
});

export const setCurrentPage = (_page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: _page,
});

export const changeForm = (e: FormType) => ({
  type: CHANGE_FORM,
  payload: {
    name: e.target.name,
    value: e.target.value,
  },
});

export const resetForm = () => ({
  type: RESET_FORM,
});

export const fetchCommentById = (id: number) => ({
  type: FETCH_COMMENT_BY_ID_REQUEST,
  payload: id,
});
