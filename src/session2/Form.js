import React from "react";
// import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }
  handleInputChange = (event) => {
    // console.log(event.target.value);
    this.setState((val) => {
      return { inputText: event.target.value };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hii form submit");
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              value={this.state.inputText}
              onChange={this.handleInputChange}
              type="text"
              name="name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.inputText}</h2>
      </>
    );
  }
}

export default Form;
