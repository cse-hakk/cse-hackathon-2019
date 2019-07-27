import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import SearchTile from "./components/SearchTile";
import ResultCards from "./components/ResultCards";
import { Container, Grid, Card, GridRow, Item } from "semantic-ui-react";

const cardList = [
  {
    name: 'Phi Phi Island Tour',
    country: 'Thailand',
    location: 'Phuket',
    description: 'Discover the best of Phi Phi Island on a Tour for $145pp',
    image: require('./Images/island.jpg'),
    rating: 5
  },
  {
    name: 'The Grand Palace',
    country: 'Thailand',
    location: 'Bangkok',
    description: 'Discover the greatly revered Emerald Buddha at the Grand Palace for $23pp',
    image: require('./Images/temple.png'),
    rating: 4
  },
  {
    name: 'Tiger Kingdom',
    country: 'Thailand',
    location: 'Phuket',
    description: 'Up-close interaction with tigers in caged enclosures for $75pp',
    image: require('./Images/lion.png'),
    rating: 1
  }
]

function AttractionCards() {
  var cards = cardList.map((item) => {
    return (
      <NavLink to='/details' style={{color:'black'}}>
      <ResultCards
        name={item.name}
        location={item.location}
        description={item.description}
        image={item.image}
        rating={item.rating}
        color={item.rating >=4 ? 'green' : 'red'}
      />
      </NavLink>
    )
  }) 
  return (
    <Grid.Row>
      {cards}
    </Grid.Row>
  )
}

class Search extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }
  state = {};

  render() {
    return (
    <div>
    <Container style={{paddingTop: 50}}>
      <Grid centered>
        <SearchTile
          items={cardList}
        />
        <AttractionCards/>
      </Grid>
    </Container>
    </div>
    );
  }
}

export default Search;
