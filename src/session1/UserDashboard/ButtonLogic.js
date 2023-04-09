import React from "react";
import axios from "axios";

class ButtonLogic extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
      name: "",
      imageUrl:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
      success: 1
    };
    this.props.onDataFromButtonLogic(this.state);
  }
  clickHandle = async (userId) => {
    console.log("userId ", userId);
    let url = "https://reqres.in/api/users/" + userId;

    let res = await axios
      .get(url)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        return 0;
      });

    if (res === 0) {
      console.log("its 0");

      alert("Failed To fetch Data");

      // this.setState((curState)=> {
      //   return {
      //     email: '',
      //     name: '',
      //     imageUrl: 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg',
      //     success: 0
      //   }
      // })
    } else {
      this.setState((curState) => {
        return {
          email: res.email,
          name: res.first_name + " " + res.last_name,
          imageUrl: res.avatar,
          success: 1
        };
      });
    }

    this.props.onDataFromButtonLogic(this.state);

    console.log("res ", res);
  };

  render() {
    return (
      <button onClick={() => this.clickHandle(this.props.diff)}>
        {this.props.diff}
      </button>
    );
  }
}

export default ButtonLogic;
