import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';
import { CommentReqType, FormType } from '../types';

const Container = styled.section`
  position: relative;
  padding: 3%;
  & div {
    margin: 5px 0;
  }
`;

type InputFormType = {
  method: 'post' | 'put';
  commentForm: CommentReqType;
  onChange: (e: FormType) => void;
  onAdd: (data: CommentReqType) => void;
  onEdit: (data: CommentReqType) => void;
};

const InputForm = ({
  method,
  commentForm,
  onChange,
  onAdd,
  onEdit,
}: InputFormType) => {
  const onSubmit = useCallback(() => {
    if (method === 'post') {
      onAdd(commentForm);
    } else if (method === 'put') {
      onEdit(commentForm);
    }
  }, [onAdd, commentForm, method, onEdit]);

  return (
    <Container>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="profile_url" className="a11yHidden">
            썸네일 주소
          </label>
          <Input
            id="profile_url"
            name="profile_url"
            placeholder="썸네일 이미지 주소"
            onChange={onChange}
            value={commentForm.profile_url}
          />
        </div>
        <div>
          <label htmlFor="author" className="a11yHidden">
            작성자
          </label>
          <Input
            id="author"
            name="author"
            placeholder="작성자"
            onChange={onChange}
            value={commentForm.author}
          />
        </div>
        <div>
          <label htmlFor="content" className="a11yHidden">
            내용
          </label>
          <TextArea
            id="content"
            name="content"
            placeholder="내용"
            onChange={onChange}
            value={commentForm.content}
          />
        </div>
        <div>
          <label htmlFor="createDate" className="a11yHidden">
            작성일
          </label>
          <Input
            id="createDate"
            name="createdAt"
            placeholder="작성일"
            onChange={onChange}
            value={commentForm.createdAt}
          />
        </div>
        <Button htmlType="submit">등록</Button>
      </Form>
    </Container>
  );
};

export default InputForm;
