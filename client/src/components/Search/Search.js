import React, { Component } from "react";
import SearchTile from './components/SearchTile';
import ResultCards from "./components/ResultCards";
import { Container, Grid } from "semantic-ui-react";

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
            locationName='test'
          />
        </Grid.Row>
      </Grid>
    </Container>
    </div>
    );
  }
}

export default Search;
