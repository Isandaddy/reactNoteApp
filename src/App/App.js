import React from "react";
import "./App.css";
import Header from "../Header/Header";
import List from "../List/List";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List />
        </div>
      </div>
    );
  }
}

export default App;
