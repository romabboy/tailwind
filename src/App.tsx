import React from 'react';
import { Wrapper } from './components/wrapper/index';
import { Header } from './components/header';
import { MainSection } from './components/main_section';

function App() {
  return (
    <Wrapper>
      <Header/>
      <MainSection/>
    </Wrapper>

  );
}

export default App;
