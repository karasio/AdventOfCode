import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';
import First from "./components/First";
import Second from "./components/Second";
import Home from "./components/Home";

function App() {
  const padding = {
    padding: 5
  };
  return (
    <div className="App">
      <Router>
        <div id="menu">
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/first">01</Link>
          <Link style={padding} to="/second">02</Link>
        </div>
        <br/>
        <div>
          <a href="https://adventofcode.com/2020/about">AdventOfCode</a>
        </div>
        <Switch>
          <Route path="/first">
            <First/>
          </Route>
          <Route path="/second">
            <Second/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    

      </Router>
    </div>
  );
}

export default App;
