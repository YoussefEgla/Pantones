import React, { useState } from "react";
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
  const [allCollections, setAllCollections] = useState(seedCollections);

  function addCollection(collection: SeedCollection) {
    //@ts-ignore
    seedCollections.push(collection);
  }

  function deleteCollection(collectionToDelete: string) {
    // @ts-ignore
    setAllCollections(
      allCollections.filter((collection) => {
        return collectionToDelete !== collection.id;
      })
    );
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Collections
            collections={allCollections}
            dispatch={{ deleteCollection }}
          />
        )}
      />
      <Route
        exact
        path="/collection/new"
        render={() => <NewCollection dispatch={{ addCollection }} />}
      />
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
