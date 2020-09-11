import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';
import { CommentResType } from '../types';

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

type PageListType = {
  loading: boolean;
  data: CommentResType[] | null;
  error: Error | null;
  currentPage: number;
  onSetCurrentPage: (_page: number) => void;
};

function PageList({
  loading,
  data,
  error,
  currentPage,
  onSetCurrentPage,
}: PageListType) {
  if (!data) return null;
  return (
    <Container>
      <h2 className="a11yHidden">페이지 리스트</h2>
      <Pagination
        pageSize={5}
        current={currentPage}
        onChange={(page: number) => {
          onSetCurrentPage(page);
        }}
        total={data.length}
        responsive
      />
    </Container>
  );
}

export default PageList;
