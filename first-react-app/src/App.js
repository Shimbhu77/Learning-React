import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextTransform from './Components/TextTransform';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
     
      const [mode,setMode] =  useState('light');  
      const [alert,SetAlert] = useState(null);

      const showAlert = (message,type)=>{
        SetAlert({
              msg: message,
              type:type
        })

        setTimeout(()=>{
             SetAlert(null);
        },2000)
      }
      const toggleMode = ()=>
      {
          if(mode === 'light')
          {
            setMode('dark');
            document.body.style.backgroundColor='#1b3c5d';
            showAlert("Dark Mode Enabled ","success");
            document.title="Shimbhu - Dark Mode";
          }
          else
          {
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert("Light Mode Enabled ","success");
            document.title="Shimbhu - Light Mode";
          }
      }

  return (
    <>
      <Router>
         <Navbar title="Shimbhu" home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
         <Alert alert={alert}/>
         <div className="container">
          {/* Old version of code using switch router which is deprecated */}

         {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextTransform showAlert={showAlert} heading="Enter Text Here" mode ={mode}/>
            </Route>
        </Switch> */}

        {/* new version of router using element */}
           <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextTransform showAlert={showAlert} heading="Enter Text Here" mode={mode} />} />
        </Routes>

          </div>
        </Router>   
    </>
  );
}

export default App;
