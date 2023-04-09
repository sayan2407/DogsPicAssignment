import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log("props1 ", props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>Email: {this.props.dataFromButtonLogic.email} </li>
          <li>Name: {this.props.dataFromButtonLogic.name}</li>
        </ul>
        <img src={this.props.dataFromButtonLogic.imageUrl} alt="crio" />
      </div>
    );
  }
}

export default Dashboard;
