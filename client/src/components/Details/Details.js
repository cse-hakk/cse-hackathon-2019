import React, { Component } from "react";
import DetailedCard from "./components/DetailedCard";
import { Container, Image } from "semantic-ui-react";

class Details extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          DetailedCard
          <Image src="/images/wireframe/image.png" size="large" centered />
          <DetailedCard />
        </Container>
      </div>
    );
  }
}

export default Details;
