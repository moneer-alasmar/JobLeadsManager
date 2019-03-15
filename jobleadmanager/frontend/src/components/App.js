import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
