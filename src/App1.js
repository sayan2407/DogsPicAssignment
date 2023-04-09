import React from "react"; // Import React Object
import Counter from "./session1/Counter";
import "./styles.css";
import { Header } from "./session1/Counter";
import { Footer } from "./session1/Counter";
// import C from "./session1/Counter";

// class Cou

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>Sayan</Header>
        <Counter diff={1} />
        <Counter diff={10} />
        <Footer />
      </div>
    );
  }
}

export default App;
