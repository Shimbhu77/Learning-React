import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

function App() {
  return (

    <>
         <Navbar/>

         <div className="container">  
                <Shop/>
         </div>
    </>
    
  );
}

export default App;
