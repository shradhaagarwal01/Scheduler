import React from "react";
import "./App.css";
import Container from "./containers/Container";
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Container id="container" />
    </div>
  );
}

export default App;
