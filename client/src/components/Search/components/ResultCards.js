import React, { Component } from 'react';
import { Card, Grid, GridColumn, Header, Image } from 'semantic-ui-react';

class ResultCards extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  state = {  }
  render() { 
    return ( 
      <div>
        <Card style={{margin: 10}}>
          <Card.Content>
            <Image floated='left' size='tiny' src='https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.15752-9/67257915_2311193318930644_4146697087842516992_n.png?_nc_cat=107&_nc_oc=AQkf22OZ5jvjkHZOVevIGVC6GfgyUvRJNCidckIT34C2Wmup9M3U03_djfDjU_qrNmo&_nc_ht=scontent.fcbr1-1.fna&oh=c45d85284bd152a99ca79571051d260e&oe=5DE36BA2'/>
            <Card.Header>Test Header</Card.Header>
            <Card.Meta> Location</Card.Meta>
            <Card.Description>
              A short descriptino about animal abuse or some shit
            </Card.Description>
          </Card.Content>
        </Card>
      </div>

     );
  }
}
 
export default ResultCards;