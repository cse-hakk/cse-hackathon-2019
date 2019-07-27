import React from "react";
import { Link } from "react-router-dom";
import { Segment, Image, Header, Dropdown, Button, GridRow, GridColumn } from "semantic-ui-react";

export const MyHeader = props => {
  return (
    <Segment>
      {/* <Grid>
        <Grid.Row>
          <Grid.Column>
          <Header as="h1" floated="left" />
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid> */}
      <Link to='/'> <Image
        size="tiny"
        src="https://cdn3.iconfinder.com/data/icons/global-earth-navigation-location-1/100/51-512.png"
        avatar
      /></Link>
      <span style={{marginLeft:'30px', fontSize:'45px', verticalAlign:'middle'}}>EcoTrip</span>
      <Link to="/itinerary"> 
      <Button size='big' style={{float:"right", marginTop:'20px'}}
        icon={{ color: "grey  ", name: "calendar"}}
      />
      </Link>
      
    </Segment>
  );
};
