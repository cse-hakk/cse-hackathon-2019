import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import SearchBar from './SearchBar'

class SearchTile extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <Grid centered columns={1}>
          <Header as='h1'>Start your journey to sustainability</Header>
        <Grid.Row>
          <SearchBar/>
        </Grid.Row>
      </Grid>
      </div>
     );
  }
}
 
export default SearchTile;