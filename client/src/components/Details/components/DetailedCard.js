import React, { Component } from "react";
import {
  Header,
  Container,
  Grid,
  Button,
  Segment,
} from "semantic-ui-react";
import { RatingItem } from "./RatingItem";
import { Reviews } from "./Reviews";

const ratings = { 
  0: [
    { name: "Sustainability", rating: 4 },
    { name: "Regulations", rating: 3 },
    { name: "Transportation", rating: 2 },
    { name: "Cleanliness", rating: 4 },
  ],
  1: [
    { name: "Sustainability", rating: 1 },
    { name: "Regulations", rating: 1 },
    { name: "Transportation", rating: 2 },
    { name: "Cleanliness", rating: 2 },
    { name: "Animal Treatment", rating: 1 }
  ],
  2: [
    { name: "Sustainability", rating: 1 },
    { name: "Regulations", rating: 1 },
    { name: "Transportation", rating: 2 },
    { name: "Cleanliness", rating: 2 },
    { name: "Animal Treatment", rating: 1 }
  ],
}

const reviews = { 
  0: [
    { header: "Incredibly clean!", description: "The local government does a great job keeping the natural habitats clean" },
    { header: "Not too overcrowded", description: "Glad to see that the human impact was low!" },
    { header: "Petrol boats", description: "Wonderful scenery, but I just can't help but think about the pollution from all those boats..." }, 
  ],
  1: [
    { header: "Incredibly clean!", description: "The local government does a great job keeping the natural habitats clean" },
    { header: "Not too overcrowded", description: "Glad to see that the human impact was low!" },
    { header: "Petrol boats", description: "Wonderful scenery, but I just can't help but think about the pollution from all those boats..." }, 
  ],
  2: [
    { header: "Extremely Cruel - Do not visit", description: "These poor tigers would be scarred for life. It is the poorest treatment" },
    { header: "Do not visit very cruel!", description: "Tigers are obviously caught and held captive against their will in small cages with no room to move at all" },
    { header: "Concerning", description: "The tigers might have been drugged as they look very tired all the time and after a few seconds, they would go back to sleep" }, 
  ],
}

class DetailedCard extends Component {
  constructor(props) {
    super(props);
    this.props = props
    if (this.props.name == 'Phi Phi Island Tour') {
      this.key = 0
    } else if (this.props.name == 'The Grand Palace') {
      this.key = 1
    } else {
      this.key = 2
    }
  }
  state = {};

  componentDidMount() {
    if (this.props.name == 'Phi Phi Island Tour') {
      this.key = 0
    } else if (this.props.name == 'The Grand Palace') {
      this.key = 1
    } else {
      this.key = 2
    }
  }
  componentDidUpdate() {
    if (this.props.name == 'Phi Phi Island Tour') {
      this.key = 0
    } else if (this.props.name == 'The Grand Palace') {
      this.key = 1
    } else {
      this.key = 2
    }
  }
  render() {
    return (
      <Segment style={{ backgroundColor: "#e5e5e5" }}>
        <Container>
          <Header as="h3">{this.props.country} - {this.props.location}</Header>
          <div> {this.props.description}</div>
          <br />
        </Container>
        <Container>
          <Button color="grey" floated="left">
            Book now
          </Button>
          <Button color="grey" floated="right">
            Add to itinerary
          </Button>
        </Container>
        <Container>
          <br />
          <Header as="h3">Professional opinion</Header>
          <div>{this.props.descriptionExtended}</div>
          <div style={{textAlign: 'center', width: '100%'}}>
            <a size='mini' color="grey" style={{display: 'inline-block', color: 'grey', marginTop: 5}}>See all Reviews (63)</a>
          </div>
        </Container>
        <br />
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={6}>
                {(ratings[this.key]).map((item,id) => {
                  return <RatingItem id={id} name={item.name} rating={item.rating} />;
                })}
              </Grid.Column>
              <Grid.Column width={10}>
              {(reviews[this.key]).map((item,id) => {
                  return <Reviews id={id} header={item.header} description={item.description} />;
                })}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default DetailedCard;
