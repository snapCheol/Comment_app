import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { CommentType } from '../types';

const Container = styled.section`
  position: relative;
`;

const CommentListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

type CommentListType = {
  loading: boolean;
  data: CommentType[] | null;
  error: Error | null;
};

const CommentList = ({ loading, data, error }: CommentListType) => {
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
            />
          ))}
        </CommentListWrapper>
      </Container>
    </>
  );
};

export default CommentList;
