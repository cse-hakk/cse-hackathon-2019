import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import SearchBar from './SearchBar'

class SearchTile extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <Container textAlign='center'>
        <Header as='h1'>Start your journey to sustainability</Header>
        <SearchBar/>
      </Container>
      </div>
     );
  }
}
 
export default SearchTile;