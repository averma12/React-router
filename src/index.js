import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./styles.css";

const PageOne = () => {
  return (
    <div>
      Page One
      <NavLink to="/pagetwo">Navigate to Page two</NavLink>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <NavLink to="/pageone">Navigate to Page one</NavLink>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router basename={"/v1"}>
        <div>
          <Route path="/pageone" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
