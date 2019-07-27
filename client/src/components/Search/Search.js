import React, { Component } from "react";
import SearchTile from './components/SearchTile';
import ResultCards from "./components/ResultCards";
import { Container, Grid, Card, GridRow } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

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
            attractionName='Phi Phi Island Tour'
            locationName='Phucket'
          />
          <ResultCards
            attractionName='Phi Phi Island Tour'
            locationName='Phucket'
          />
        </Grid.Row>
      </Grid>
    </Container>
    </div>
    );
  }
}

export default Search;
