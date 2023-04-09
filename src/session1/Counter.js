import React from "react"; // Import React Object

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // State Variables determine the behaviour/property of your component/
    // If they change, a re-render of your compo.happens
    this.state = {
      count: 0 // State Variable
    };
  }

  increment = () => {
    this.setState((currState, props) => {
      console.log("Increment", props);

      return { count: currState.count + props.diff };
    });
  };

  decrement = () => {
    this.setState((currState) => {
      console.log(currState);

      return { count: currState.count - this.props.diff };
    });
  };

  render() {
    return (
      <div>
        <h1 className="counter-display">{this.state.count}</h1>
        <div>
          <button onClick={this.increment}> +{this.props.diff} </button>
          <button onClick={this.decrement}> -{this.props.diff} </button>
        </div>
      </div>
    );
  }
}

export default Counter;

export class Header extends React.Component {
  render() {
    return <h2>I am Header</h2>;
  }
}

export class Footer extends React.Component {
  render() {
    return <h2>I am Footer</h2>;
  }
}
