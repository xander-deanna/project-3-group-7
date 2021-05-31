import logo from './logo.svg';
import NavBar from "./components/NavBar";

import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";

import './App.css';

function App() {
  return (
    <div className="App">
      <Explore></Explore>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
