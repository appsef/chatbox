import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import PostSection from './components/PostSection';
import SectionLeft from './components/SectionLeft';
import UserSection from './components/UserSection';


function App() {

  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      
      <div className="grid grid-cols-5 grid-flow-row overflow-x-hidden" >
        <SectionLeft setSelected={setSelected} selected={selected} />
        <PostSection />
        <UserSection />

      </div>

    </div>
  );
}

export default App;
