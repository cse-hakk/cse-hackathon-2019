import React from "react";
import { Switch, Route } from "react-router-dom";
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
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
