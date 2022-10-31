import React from "react";
import {useState} from 'react';

import ModelViewer from "./components/3dLetters/modelViewer";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Education from "./components/education/education";
import Contacts from "./components/contacts/contacts";


export default function App() {
  const [page, setPage] = useState('about');
  
  return (
    <div className="container-main">
      <div className="main-content">
        <h1> Yaroslav Gorban portfolio</h1>
        {page === 'about' && <About/>}
        {page === 'skills' && <Skills/>}
        {page === 'education' && <Education/>}
        {page === 'contacts' && <Contacts/>}

      </div>
      <div className="canvas"> 
           <ModelViewer />
      </div>
      <div className="some-content">
        <div className="btn-toolbar" role="toolbar">
        <button className ='btn btn-secondary' onClick = {() =>setPage('about')}>About </button>
        <button className ='btn btn-secondary' onClick = {() =>setPage('skills')}>Skills </button>
        <button className ='btn btn-secondary' onClick = {() =>setPage('education')}>Education </button>
        <button className ='btn btn-secondary' onClick = {() =>setPage('contacts')}>Contacts </button>
        </div>
      </div>
    </div>
  )
}
