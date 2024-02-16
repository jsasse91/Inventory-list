import NavBar from "./components/navbar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/routing";

function App() {
  return (
    <Router>
      <NavBar />
      <Routing />
    </Router>
  );
}

export default App;
