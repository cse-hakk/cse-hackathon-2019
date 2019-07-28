import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Container } from "semantic-ui-react";
import ItineraryItem from "./components/ItineraryItem";

const itineraryItems = [{
    date: "5 august Monday",
    items: [{
        name: "hello",
        link: "/details"
    }]
    
}]
class Itinerary extends Component {
    state = {};
    render() {
      return (
        <Container>
            <Header as="h3">My Itinerary</Header>
            {itineraryItems.map(e => {
                return (<ItineraryItem items={e.items} date={"5 august Monday"}/>);
            })}
        </Container>
      );
    }
  }
  
  export default Itinerary;
  