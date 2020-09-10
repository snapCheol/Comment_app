import { CommentType } from '../../types';

export const FETCH_COMMENT_LIST_REQUEST = '/comment/FETCH_COMMENT_LIST_REQUEST' as const;
export const FETCH_COMMENT_LIST_SUCCESS = '/comment/FETCH_COMMENT_LIST_SUCCESS' as const;
export const FETCH_COMMENT_LIST_FAILURE = '/comment/FETCH_COMMENT_LIST_FAILURE' as const;

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

export const fetchCommentList = () => ({
  type: FETCH_COMMENT_LIST_REQUEST,
});

export const addComment = (data: CommentType) => ({
  type: ADD_COMMENT_REQUEST,
  payload: data,
});

export const editComment = () => ({
  type: EDIT_COMMENT_REQUEST,
});

export const removeComment = (id: number) => ({
  type: REMOVE_COMMENT_REQUEST,
  payload: id,
});
