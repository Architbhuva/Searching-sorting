import React, { Component } from "react";
import "./App.css";
import Books from "./components/book";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Books />
      </main>
    );
  }
}

export default App;
