import React, { useCallback, useEffect } from 'react';
import CommentList from '../components/CommentList';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchListPerPage,
  removeComment,
  fetchCommentById,
} from '../redux/comment/actions';
import { RootState } from '../redux';

const CommentListContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.comment.commentPerPage
  );
  const { currentPage } = useSelector((state: RootState) => state.comment);

  const onEdit = useCallback(
    (id: number) => {
      dispatch(fetchCommentById(id));
    },
    [dispatch]
  );
  const onDelete = useCallback(
    (id: number) => {
      const confirm = window.confirm('정말 삭제하시겠습니까?');
      if (confirm) {
        dispatch(removeComment(id));
        dispatch(fetchListPerPage(currentPage));
      } else {
        return false;
      }
    },
    [dispatch, currentPage]
  );

  useEffect(() => {
    dispatch(fetchListPerPage(currentPage));
  }, [currentPage, dispatch]);

  return (
    <CommentList
      data={data}
      loading={loading}
      error={error}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  );
};

export default CommentListContainer;
