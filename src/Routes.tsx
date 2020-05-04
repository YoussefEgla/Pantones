import React from "react";
import { Route, Switch } from "react-router-dom";

// views
import { Collections, OneCollection, NotFound, NewCollection } from "./views/";

// utils and functions
import {
  seedCollections,
  findCollection,
  collectionWithShades,
} from "./services/";

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Collections collections={seedCollections} />}
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
