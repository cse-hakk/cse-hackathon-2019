import React, { Component } from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import SearchBar from './SearchBar'

const searchBackground = {
}

class SearchTile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {  }
  render() { 
    return ( 
      <div style={searchBackground}>
      <Grid centered columns={1}>
          <Header as='h1'>Start your journey to sustainability</Header>
        <Grid.Row>
          <SearchBar
            items={this.props.items}
          />
        </Grid.Row>
      </Grid>
      </div>
     );
  }
}
 
export default SearchTile;