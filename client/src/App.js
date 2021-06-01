import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <div>
            <Route exact path="/" component={Explore} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/gallery" component={Gallery} />
          </div>
      </Router>
    </div>
  );
}

export default App;
