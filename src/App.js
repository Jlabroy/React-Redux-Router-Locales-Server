import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./common/Route";
import Index from "./components/Index";
import Home from "./containers/Home";
import ConferenceCalling from "./containers/ConferenceCalling";
import Contact from "./containers/Contact";
import "./styles/App.css";

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/:lang" component={Home} />
        <Route path="/:lang/contact" component={Contact} />
        <Route
          path={["/:lang/conference-call", "/:lang/conference-telephonique"]}
          component={ConferenceCalling}
        />
      </div>
    </Router>
  );
};

export default App;
