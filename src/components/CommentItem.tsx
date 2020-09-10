import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from 'antd';

const CommentListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;
const CommentListRow = styled.li`
  position: relative;
  padding: 5% 3% 3% 3%;
  border-bottom: 1px solid #eee;
  & + & {
  }
`;

const CommentItemRow = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 25px;
  }
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  & > strong {
    display: block;
    margin-left: 10px;
    font-size: 14px;
  }
`;

const Datetime = styled.span`
  margin-left: auto;
  font-size: 13px;
`;

const Comment = styled.div`
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  margin-left: auto;
  & button {
    font-size: 12px;
  }
  & button + button {
    margin-left: 5px;
  }
`;
const CommentItem = () => {
  return (
    <CommentListRow>
      <CommentItemRow>
        <Writer>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <strong>아무개</strong>
        </Writer>
        <Datetime>2020-09-14</Datetime>
      </CommentItemRow>
      <CommentItemRow>
        <Comment>취업하고 싶어요!</Comment>
        <ButtonGroup>
          <Button size="middle">수정</Button>
          <Button size="middle" danger>
            삭제
          </Button>
        </ButtonGroup>
      </CommentItemRow>
    </CommentListRow>
  );
};

export default CommentItem;
