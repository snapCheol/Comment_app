import React, { useEffect } from 'react';
import CommentList from '../components/CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListPerPage } from '../redux/comment/actions';
import { RootState } from '../redux';

const CommentListContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.comment.comment
  );
  const { currentPage } = useSelector((state: RootState) => state.comment);

  console.log(data);
  useEffect(() => {
    dispatch(fetchListPerPage(currentPage));
  }, [currentPage, dispatch]);

  return <CommentList data={data} loading={loading} error={error} />;
};

export default CommentListContainer;
