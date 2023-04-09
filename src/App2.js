import React, { useState } from "react"; // Import React Object
import Counter from "./session1/Counter";
import ButtonLogic from "./session1/UserDashboard/ButtonLogic";
import Dashboard from "./session1/UserDashboard/Dashboard";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDataFromChild = (data) => {
    this.setState((curState) => {
      console.log("data", data);

      return data;
    });
  };
  render() {
    return (
      <div>
        <div>
          <ButtonLogic
            onDataFromButtonLogic={this.handleDataFromChild}
            diff={1}
          />
          <ButtonLogic
            onDataFromButtonLogic={this.handleDataFromChild}
            diff={2}
          />
          <ButtonLogic
            onDataFromButtonLogic={this.handleDataFromChild}
            diff={3}
          />
          <ButtonLogic
            onDataFromButtonLogic={this.handleDataFromChild}
            diff={100}
          />
        </div>
        <div>
          <Dashboard dataFromButtonLogic={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
