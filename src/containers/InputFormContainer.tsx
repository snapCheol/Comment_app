import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputForm from '../components/InputForm';
import { RootState } from '../redux';
import {
  addComment,
  changeForm,
  editComment,
  fetchListPerPage,
  resetForm,
} from '../redux/comment/actions';
import { CommentReqType, FormType } from '../types';

function InputFormContainer() {
  const dispatch = useDispatch();
  const { commentForm, currentPage } = useSelector(
    (state: RootState) => state.comment
  );
  const { method } = useSelector((state: RootState) => state.comment);

  const onChange = useCallback(
    (e: FormType) => {
      dispatch(changeForm(e));
    },
    [dispatch]
  );

  const onAdd = useCallback(
    (data: CommentReqType) => {
      dispatch(addComment(data));
      dispatch(fetchListPerPage(currentPage));
      dispatch(resetForm());
    },
    [dispatch, currentPage]
  );

  const onEdit = useCallback(
    (data: CommentReqType) => {
      dispatch(editComment(data));
      dispatch(fetchListPerPage(currentPage));
      dispatch(resetForm());
    },
    [dispatch, currentPage]
  );

  return (
    <InputForm
      method={method}
      onAdd={onAdd}
      onEdit={onEdit}
      onChange={onChange}
      commentForm={commentForm}
    />
  );
}

export default InputFormContainer;
