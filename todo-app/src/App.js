import './App.css';
import Navbar from './Components/Navbar';
import { connect } from 'react-redux';

import Task from './Components/Task';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Task/>
    </div>
  );
}

export default (App);
