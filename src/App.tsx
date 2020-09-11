import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import CommentListContainer from './containers/CommentListContainer';

import InputFormContainer from './containers/InputFormContainer';
import PageListContainer from './containers/PageListContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <CommentListContainer />
      <PageListContainer />
      <InputFormContainer />
    </>
  );
}

export default App;
