import React from "react";
import { Header, Menu, Avatar, Text } from "semantic-ui-react";

export const MyHeader = props => {
  return (
    <Header className="App-header">
      <Menu
        backgroundColor="747474"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Avatar
          size={60}
          style={{ backgroundColor: "#90EE90" }}
          src="https://cdn3.iconfinder.com/data/icons/global-earth-navigation-location-1/100/51-512.png"
        />
        <Text strong>EcoTrip</Text>
        <Menu.Item key="1">View Itinerary</Menu.Item>
      </Menu>
    </Header>
  );
};
