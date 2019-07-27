import React, { Component } from "react";
import SearchTile from "./components/SearchTile";
import ResultCards from "./components/ResultCards";
import { Container, Grid, Card, GridRow } from "semantic-ui-react";


class Search extends Component {
  state = {};
  render() {
    return (
    <div>
    <Container style={{paddingTop: 50}}>
      <Grid centered>
        <SearchTile/>
        <Grid.Row>
          <ResultCards
            name='Phi Phi Island Tour'
            location='Phucket'
            description='a very great place !!!'
            image={image}
          />
          <ResultCards
            attractionName='Phi Phi Island Tour'
            locationName='Phucket'
            image={image}
            rating={5}
          />
        </Grid.Row>
      </Grid>
    </Container>
    </div>
    );
  }
}

export default Search;
