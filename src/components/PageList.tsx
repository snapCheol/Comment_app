import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

function PageList() {
  return (
    <Container>
      <h2 className="a11yHidden">페이지 리스트</h2>
      <Pagination defaultCurrent={1} total={50} />
    </Container>
  );
}

export default PageList;
