import React, { Component } from "react";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home page',
      counter: 1
    }
  }
  onGreet = () => {
    alert(this.state.title);
  }
  getDataFromChild = (data) => {
    this.setState({
      title: data
    })
  }
  render() {
    return (
      <div className="App">
        <Home title={this.state.title} counter={this.state.counter} greet={this.onGreet} changeLink={this.getDataFromChild}>
          <hr/>
        </Home>
      </div>
    );
  }
}

export default App;
