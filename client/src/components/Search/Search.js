import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SearchTile from "./components/SearchTile";
import ResultCards from "./components/ResultCards";
import { Container, Grid} from "semantic-ui-react";

const cardList = [
  {
    name: 'Phi Phi Island Tour',
    country: 'Thailand',
    location: 'Phuket',
    description: 'Discover the best of Phi Phi Island on a Tour for $145pp',
    image: require('./Images/island.jpg'),
    rating: 5,
    key: 0,
    reviewCount: '117',
    descriptionExtended: 'PLACEHOLDER',
    professional: 'PROFESSIONAL'
  },
  {
    name: 'The Grand Palace',
    country: 'Thailand',
    location: 'Bangkok',
    description: 'Discover the greatly revered Emerald Buddha at the Grand Palace for $23pp',
    image: require('./Images/temple.png'),
    rating: 4,
    key: 0,
    reviewCount: '42',
    descriptionExtended: 'PLACEHOLDER',
    professional: 'PROFESSIONAL'
  },
  {
    name: 'Tiger Kingdom',
    country: 'Thailand',
    location: 'Phuket',
    description: 'Up-close interaction with tigers in caged enclosures for $75pp',
    image: require('./Images/lion.png'),
    rating: '1',
    key: 0,
    reviewCount: '73',
    descriptionExtended: 'PLACEHOLDER',
    professional: 'PROFESSIONAL'
  }
]

function AttractionCards() {
  var cards = cardList.map((item) => {
    return (
      <Link to={{pathname: '/details',
       state: {
         description: item.description,
         name: item.name,
         location: item.location,
         country: item.country,
         rating: item.rating,
         image: item.image,
       }}} style={{color:'black'}}>
      <ResultCards
        name={item.name}
        location={item.location}
        description={item.description}
        image={item.image}
        rating={item.rating}
        color={item.rating >=4 ? 'green' : 'red'}
      />
      </Link>
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
