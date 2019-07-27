import React from "react";
import { Switch, Route } from "react-router-dom";
import { Divider, Dropdown, Image, Button, Segment } from 'semantic-ui-react'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";

const HomePage = () => {
  return <Home />;
};

const SearchPage = () => {
  return <Search />;
};

const DetailsPage = () => {
  return <Details />;
};

function App() {
  return (
    <div className="App">
      <Segment>
        <Header as='h1' floated='left'>
          <Image size='small' src='https://cdn3.iconfinder.com/data/icons/global-earth-navigation-location-1/100/51-512.png' avatar />
          <span>EcoTrip</span>
          <Dropdown
          button
          className='icon'
          floating
          labeled
          icon='world'
          search
          text='View your itinerary'
          />
          <Button content="View your itinerary" icon={{ color: 'white', name: 'view' }} />
        </Header>
      </Segment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
