import React from "react";
import { Switch, Route } from "react-router-dom";
import { MyHeader } from "./components/Header/Header";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import Itinerary from "./components/Itinerary/Itinerary";

const SearchPage = () => {
  return <Search />;
};

const DetailsPage = () => {
  return <Details />;
};

const ItineraryPage = () => {
  return <Itinerary />;
}

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/details" component={DetailsPage} />
        <Route path="/itinerary" component={ItineraryPage} />
        <Route path="/*" component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;
