import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Container } from "semantic-ui-react";

class ItineraryItem extends Component {
    state = {};
    render() {
      return (
        <Container>
            <Header as="h3">{this.props.date}</Header>
            {this.props.items.map((item) => <Link to={item.link}><Button>{item.name}</Button></Link>)}
        </Container>
      );
    }
  }
  
  export default ItineraryItem;