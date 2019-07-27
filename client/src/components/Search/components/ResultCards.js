import React, { Component } from 'react';
import { Grid, Rating, Segment, GridRow, Button, Divider } from 'semantic-ui-react';

const RatingItem = props => {
  return (
    <div>
      <div>{props.name}</div>
      <Rating
        maxRating={5}
        defaultRating={props.rating}
        icon="star"
        size="mini"
        disabled
      />
    </div>
  );
};


class ResultCards extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  state = {  }
  render() { 
    return ( 
      <div>
        <Segment color={this.props.color} style={{padding: 0, margin: 10}}>
          <Grid columns={2}>
            <Grid.Column width={7}>
              <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={this.props.image}/>
            </Grid.Column>
            <Grid.Column  width={9} style={{textAlign: 'left', paddingTop: 20, paddingleft: 0}}>
              <Grid columns={2}>
                <Grid.Row style={{paddingBottom: 0}}>
                  <Grid.Column width={10} style={{paddingLeft: 0, color:'#4287f5'}}>
                    <h5>{this.props.name}</h5>
                  </Grid.Column>
                  <Grid.Column width={5} style={{textAlign: 'right', paddingLeft: 0}}>
                    {this.props.location}
                  </Grid.Column>
                </Grid.Row>
                <GridRow style={{padding: 0}}>
                  <h6 style={{paddingBottom: 0, margin: 0}}>{this.props.type}</h6>
                </GridRow>
                <GridRow style={{padding: 0}}>
                  <p style={{paddingTop: 0, fontSize: 11, marginRight: 10}}>{this.props.description}</p>
                </GridRow>
                <GridRow style={{position: 'absolute', bottom: 25}}>
                  <Grid.Column>
                    <Button size='mini'>Book</Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button size='mini'>Save</Button>
                  </Grid.Column>
                </GridRow>
                <GridRow style={{position: 'absolute', bottom: 0}}>
                  <text style={{fontSize: 10, paddingRight: 15}}>Sustainability Rating</text> <RatingItem
                    rating = {this.props.rating}
                  />
                </GridRow>
              </Grid>
              
            </Grid.Column>
          </Grid>
        </Segment>
      </div>

     );
  }
}
 
export default ResultCards;