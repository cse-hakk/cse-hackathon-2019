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

const ratingItems = [
  { name: "Sustainability", rating: 1 },
  { name: "Regulations", rating: 1 },
  { name: "Transportation", rating: 2 },
  { name: "Cleanliness", rating: 2 },
  { name: "Animal Treatment", rating: 1 }
];
const reviewItems = [
  { header: "Extremely Cruel - Do not visit", description: "These poor tigers would be scarred for life. It is the poorest treatment" },
  { header: "Do not visit very creul!", description: "Tigers are obviously caught and held captive against their will in small cages with no room to move at all" },
  { header: "Concerning", description: "The tigers might have been drugged as they look very tired all the time and after a few seconds, they would go back to sleep" },

];

class DetailedCard extends Component {
  state = {};
  render() {
    return (
      <Segment style={{ backgroundColor: "#e5e5e5" }}>
        <Container>
          <Header as="h3">Country - City</Header>
          <div> description</div>
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
          <Header as="h3">Professional Opinion</Header>
          <div>More description</div>
          <Button color="grey">See all Reviews (63)</Button>
        </Container>
        <br />
        <Container>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={6}>
                {ratingItems.map((item,id) => {
                  return <RatingItem id={id} name={item.name} rating={item.rating} />;
                })}
              </Grid.Column>
              <Grid.Column width={10}>
              {reviewItems.map((item,id) => {
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
