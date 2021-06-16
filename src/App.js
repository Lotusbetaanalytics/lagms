import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import LaptopScreen from "./components/screens/LaptopScreen";
import NewGuest from "./components/screens/NewGuest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newGuest" component={NewGuest} />
        <Route path="/laptop" component={LaptopScreen} />
      </Switch>
    </Router>
  );
}

export default App;
