import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
`;

const CommentListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const CommentList = () => {
  return (
    <Container>
      <h2 className="a11yHidden">댓글 리스트</h2>

      <CommentListWrapper></CommentListWrapper>
    </Container>
  );
};

export default CommentList;
