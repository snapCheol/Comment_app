import React from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  padding: 3%;
  & div {
    margin: 5px 0;
  }
`;

const InputForm = () => {
  return (
    <Container>
      <Form>
        <div>
          <label htmlFor="thumbnail" className="a11yHidden">
            썸네일 주소
          </label>
          <Input id="thumbnail" placeholder="썸네일 이미지 주소" />
        </div>
        <div>
          <label htmlFor="writer" className="a11yHidden">
            작성자
          </label>
          <Input id="writer" placeholder="작성자" />
        </div>
        <div>
          <label htmlFor="content" className="a11yHidden">
            내용
          </label>
          <TextArea id="content" placeholder="내용" />
        </div>
        <div>
          <label htmlFor="createDate" className="a11yHidden">
            작성일
          </label>
          <Input id="createDate" placeholder="작성일" />
        </div>
        <Button>등록</Button>
      </Form>
    </Container>
  );
};

export default InputForm;
