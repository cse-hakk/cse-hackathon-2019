import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";

const SearchPage = () => {
  return <Search />;
};

const DetailsPage = () => {
  return <Details />;
};

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/" component={SearchPage} /> */}
        <Route path="/details" component={DetailsPage} />
        {/* <Route path="/*" component={SearchPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
