import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";

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
    <div>
      <Router>
        <div>
          <Header />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
