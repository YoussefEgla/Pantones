import React from "react";
import { Route, Switch } from "react-router-dom";
import collections from "./utils/seedcolors";
import { collectionWithShades } from "./utils/shades";
import { findCollection } from "./utils/misc";
import Pantones from "./views/Pantones";
import NotFound from "./views/NotFound-404";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>ALL COLLECTIONS VIEW</h1>} />
      <Route
        exact
        path="/collection/:id"
        render={(props) => {
          let collection = findCollection(props.match.params.id);
          return collection ? (
            <Pantones {...collectionWithShades(collection)} />
          ) : (
            <NotFound />
          );
        }}
      />
      {/* <div className="App">
      <Pantones {...collectionWithShades(collections[0])} />
    </div> */}
    </Switch>
  );
}

export default App;
