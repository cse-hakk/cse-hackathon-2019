import React from "react";
import { Segment, Image, Header, Dropdown, Button } from "semantic-ui-react";

export const MyHeader = props => {
  return (
    <Segment>
      <Header as="h1" floated="left" />
      <Image
        size="tiny"
        src="https://cdn3.iconfinder.com/data/icons/global-earth-navigation-location-1/100/51-512.png"
        avatar
      />
      <span>EcoTrip</span>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="world"
        search
        text="View your itinerary"
      />
      <Button
        content="View your itinerary"
        icon={{ color: "white", name: "view" }}
      />
    </Segment>
  );
};
