import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from 'antd';
import { CommentType } from '../types';

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
  width: 65%;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  width: 30%;
  & button {
    font-size: 12px;
  }
  & button + button {
    margin-left: 5px;
  }
`;

const CommentItem = ({
  id,
  author,
  profile_url,
  content,
  createdAt,
}: CommentType) => {
  return (
    <CommentListRow>
      <CommentItemRow>
        <Writer>
          <Avatar src={profile_url} />
          <strong>{author}</strong>
        </Writer>
        <Datetime>{createdAt}</Datetime>
      </CommentItemRow>
      <CommentItemRow>
        <Comment>{content}</Comment>
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
