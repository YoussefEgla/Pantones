import React from "react";
import { Route, Switch } from "react-router-dom";
import collections from "./utils/seedcolors";
import { collectionWithShades } from "./utils/shades";
import Pantones from "./views/Pantones";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>ALL COLLECTIONS VIEW</h1>} />
      <Route
        exact
        path="/collection/:id"
        render={() => <h1>COLLECTION VIEW</h1>}
      />
      {/* <div className="App">
      <Pantones {...collectionWithShades(collections[0])} />
    </div> */}
    </Switch>
  );
}

export default App;
