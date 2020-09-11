import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { CommentResType } from '../types';

const Container = styled.section`
  position: relative;
`;

const CommentListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

type CommentListType = {
  loading: boolean;
  data: CommentResType[] | null;
  error: Error | null;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const CommentList = ({
  loading,
  data,
  error,
  onDelete,
  onEdit,
}: CommentListType) => {
  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생!...</p>;
  if (!data) return null;
  return (
    <>
      <Container>
        <h2 className="a11yHidden">댓글 리스트</h2>

        <CommentListWrapper>
          {data.map((comment) => (
            <CommentItem
              key={comment.id}
              id={comment.id}
              author={comment.author}
              profile_url={comment.profile_url}
              content={comment.content}
              createdAt={comment.createdAt}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </CommentListWrapper>
      </Container>
    </>
  );
};

export default CommentList;
