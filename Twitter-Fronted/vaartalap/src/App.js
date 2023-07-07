import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoggedNavbar from './components/loggedNavbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/home" element={<LoggedNavbar/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
