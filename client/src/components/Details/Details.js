import React, { Component } from "react";
import DetailedCard from "./components/DetailedCard";
import { Container, Image } from "semantic-ui-react";
import { withRouter } from 'react-router-dom';

const myImg = require("./Images/lion.png");
const searchBackground = (myImg) => {
  return ({
    height: "225px",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(" + myImg + ")",
    backgroundSize: "100% 70%",
    filter: "blur(1px)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    marginBottom: "25px",
    backgroundColor: "#DCDCDC"}
  )
};
  
 

class Details extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {
    description: '',
    name: '',
    location: '',
    country: '',
    rating: null,
    key: 0,
    detailed: {},
  };
  componentDidMount () {
    const { description, name, location, country, rating, image } = this.props.location.state
    this.setState({
      description: description,
      name: name,
      image: image,
      location: location,
      country: country,
      rating: rating,
    })
  }
   
  render() {
    return (
      <div>
        <div style={searchBackground(this.state.image)}/>
        <Container>
          <DetailedCard 
            description = {this.state.description}
            name = {this.state.name}
            location = {this.state.location}
            country = {this.state.country}
            key = {this.state.key}
            reviewCount = {this.state.reviewCount}
            descriptionExtended = {this.state.descriptionExtended}
            professional = {this.state.professional}
          />
        </Container>
      </div>
    );
  }
}

export default withRouter(Details);
