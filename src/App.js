import React from "react";
import DogPicsActivity from "./session2/DogPics/DogPicsActivity";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DogPicsActivity />;
  }
}

export default App;
