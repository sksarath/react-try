import React, { Component } from "react";
import PropTypes from 'prop-types';

const style = {
  padding: "20px",
  backgroundColor: "#ddd"
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: this.props.counter,
        inputVal: ''
    };
  }
  handleSaveClick = (data) => {
      this.setState({
          'counter':this.state.counter+data
        })
  }
  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
        inputVal: e.target.value
    })
  }
  render() {
    return (
    <div>
        {this.props.title}
        <div style={style}>
            {this.props.children}
        </div>
        {this.state.counter}
        <button onClick={() => this.handleSaveClick(5)}> Save </button>
        <button onClick={this.props.greet}>parent</button>
        <br />
        <input type="text" placeholder="Enter value" value={this.state.inputVal} onChange={(event) => this.handleInputChange(event)}/>
        <button onClick={() => this.props.changeLink('we')}>parent with data</button>
    </div>);
  }
}

Home.propTypes = {
    title: PropTypes.string,
    counter: PropTypes.number,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func
}
