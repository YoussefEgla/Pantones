import React from "react";
import { Route, Switch } from "react-router-dom";
import collections from "./utils/seedcolors";
import { collectionWithShades } from "./utils/shades";
import { findCollection } from "./utils/misc";
import Pantones from "./views/Pantones";
import Collections from "./views/Collections";
import NotFound from "./views/NotFound-404";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Collections collections={collections} />}
      />
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
      <Route
        exact
        path="/collection/:id/:shade"
        render={() => <h1>SHADES VIEW</h1>}
      />
    </Switch>
  );
}

export default App;
