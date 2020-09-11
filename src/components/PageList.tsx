import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';
import { CommentType } from '../types';

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

type PageListType = {
  loading: boolean;
  data: CommentType[] | null;
  error: Error | null;
  currentPage: number;
  onSetCurrentPage: (_page: number) => void;
};

function PageList({ loading, data, error, onSetCurrentPage }: PageListType) {
  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생!...</p>;
  if (!data) return null;
  return (
    <Container>
      <h2 className="a11yHidden">페이지 리스트</h2>
      <Pagination
        defaultCurrent={1}
        pageSize={5}
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
