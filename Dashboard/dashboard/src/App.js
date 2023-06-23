import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ColorPalette from './Components/ColorPalette';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Sidebar/> */}
      <ColorPalette/>
    </div>
  );
}

export default App;
