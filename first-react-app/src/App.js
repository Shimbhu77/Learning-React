import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextTransform from './Components/TextTransform';
import About from './Components/About';
import { useState } from 'react';

function App() {
     
      const [mode,setMode] =  useState('light');  
      const toggleMode = ()=>
      {
          if(mode === 'light')
          {
            setMode('dark');
            document.body.style.backgroundColor='#1b3c5d';
          }
          else
          {
            setMode('light');
            document.body.style.backgroundColor='white';
          }
      }

  return (
    <>
         <Navbar title="Shimbhu" home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
         <div className="container">
          <TextTransform heading="Enter Text Here" mode ={mode}/>
           {/* <About/> */}
         </div>
         
    </>
  );
}

export default App;
