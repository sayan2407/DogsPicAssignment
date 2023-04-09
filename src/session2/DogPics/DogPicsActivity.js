import React from "react";

import axios from "axios";

class DogPicsActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBreed: "Random",
      imageURL: ""
    };
    this.dogBreeds = ["Random", "Beagle", "Boxer", "Dalmatian", "Husky"];
  }

  handleSelect = (event) => {
    console.log(event.target.value);
    this.fetchDogPic(event.target.value);
  };

  async componentDidMount() {
    // let url = 'https://dog.ceo/api/breeds/image/random';
    console.log("component");
    console.log("Random");

    this.fetchDogPic("Random");
  }

  fetchDogPic = async (breed) => {
    let url = "";
    if (breed === "Random") {
      url = "https://dog.ceo/api/breeds/image/random";
    } else {
      url = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`;
    }

    let res = await axios.get(url).then((response) => {
      return response.data;
    });

    if (res.status === "success") {
      console.log("breed", breed);

      this.setState((curState) => {
        return {
          selectedBreed: breed,
          imageURL: res.message
        };
      });
    }
  };

  changeBreed = () => {
    let breed = this.state.selectedBreed;
    this.fetchDogPic(breed);
  };

  render() {
    return (
      <>
        Select a breed:
        <select value={this.state.selectedBreed} onChange={this.handleSelect}>
          {this.dogBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <div>
          <h2>I am {this.state.selectedBreed} Dog</h2>
          <img
            alt={this.state.selectedBreed}
            width="200px"
            height="200px"
            src={this.state.imageURL}
          />
        </div>
        <button onClick={this.changeBreed}>Next</button>
      </>
    );
  }
}

export default DogPicsActivity;
