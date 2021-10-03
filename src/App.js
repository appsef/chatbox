import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import PostSection from './components/PostSection';
import SectionLeft from './components/SectionLeft';


function App() {

  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      
      <div className="grid grid-cols-5 grid-flow-row overflow-x-hidden" >
        <SectionLeft setSelected={setSelected} selected={selected} />
        <PostSection />
        <section className="col-span-1 hidden md:flex   h-screen sticky left-0 top-0 bottom-0 ">
        
        </section>

      </div>

    </div>
  );
}

export default App;
