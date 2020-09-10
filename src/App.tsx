import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import CommentListContainer from './containers/CommentListContainer';
import PageList from './components/PageList';
import InputFormContainer from './containers/InputFormContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <CommentListContainer />
      <PageList />
      <InputFormContainer />
    </>
  );
}

export default App;
