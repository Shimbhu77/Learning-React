import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextTransform from './Components/TextTransform';

function App() {
  return (
    <>
         <Navbar title="Shimbhu-AI" home="Home" about="About"/>
         <div className="container">
          <TextTransform heading="Enter Text Here"/>
         </div>
         
    </>
  );
}

export default App;
