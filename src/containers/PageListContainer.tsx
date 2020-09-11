import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageList from '../components/PageList';
import { RootState } from '../redux';
import {
  fetchCommentList,
  fetchListPerPage,
  setCurrentPage,
} from '../redux/comment/actions';

const PageListContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.comment.comments
  );
  const { currentPage } = useSelector((state: RootState) => state.comment);

  const onSetCurrentPage = useCallback(
    (_page: number) => {
      dispatch(setCurrentPage(_page));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchCommentList());
    dispatch(fetchListPerPage(5));
  }, [dispatch]);

  return (
    <PageList
      loading={loading}
      data={data}
      error={error}
      currentPage={currentPage}
      onSetCurrentPage={onSetCurrentPage}
    />
  );
};

export default PageListContainer;
