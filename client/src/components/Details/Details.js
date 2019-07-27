import React, { Component } from "react";
import DetailedCard from "./components/DetailedCard";
import { Container, Image } from "semantic-ui-react";

const myImg = require("./Images/lion.png");
const searchBackground = {
  height: "225px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(" + myImg + ")",
  backgroundSize: "100% 70%",
  filter: "blur(1px)",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  marginBottom: "25px",
  backgroundColor: "#DCDCDC"
};

class Details extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={searchBackground}/>
        <Container>
          <DetailedCard />
        </Container>
      </div>
    );
  }
}

export default Details;
