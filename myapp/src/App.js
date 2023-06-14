
import './App.css';
import DisplayData from './Components/DisplayData';
import Form from './Components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div >
       <Form/>
       <DisplayData/>
    </div>
  );
}

export default App;
