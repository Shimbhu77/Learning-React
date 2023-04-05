import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextTransform from './Components/TextTransform';
import About from './Components/About';

function App() {
  return (
    <>
         <Navbar title="Shimbhu-AI" home="Home" about="About"/>
         <div className="container">
          {/* <TextTransform heading="Enter Text Here"/> */}
           <About/>
         </div>
         
    </>
  );
}

export default App;
