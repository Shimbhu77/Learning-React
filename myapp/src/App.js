
import './App.css';
import DisplayData from './Components/DisplayData';
import Form from './Components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Form/>} />
          <Route path="/details" element={<DisplayData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
