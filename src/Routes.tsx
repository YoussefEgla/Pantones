import React from "react";
import { Route, Switch } from "react-router-dom";

// views
import { Collections, OneCollection } from "./views/";
import NewCollection from "./views/NewCollection";
import NotFound from "./views/NotFound-404";

// utils and functions
import collections from "./utils/seedcolors";
import { findCollection } from "./utils/misc";
import { collectionWithShades } from "./utils/shades";

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Collections collections={collections} />}
      />
      <Route exact path="/collection/new" render={() => <NewCollection />} />
      <Route
        exact
        path="/collection/:id"
        render={(props) => {
          let collection = findCollection(props.match.params.id);
          return collection ? (
            <OneCollection {...collectionWithShades(collection)} />
          ) : (
            <NotFound />
          );
        }}
      />
      <Route
        exact
        path="/collection/:id/:pantone"
        render={(props) => {
          let collection = findCollection(props.match.params.id);
          return collection ? (
            <OneCollection {...collectionWithShades(collection)} />
          ) : (
            <NotFound />
          );
        }}
      />
      <Route render={() => <NotFound />} />
    </Switch>
  );
}
