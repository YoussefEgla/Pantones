import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// views
import Collections from "./views/Collections";
import Pantones from "./views/Pantones";
import Shades from "./views/Shades";
import NotFound from "./views/NotFound-404";

// utils and functions
import collections from "./utils/seedcolors";
import { findCollection } from "./utils/misc";
import { collectionWithShades } from "./utils/shades";

export default function Routes() {
  return (
    <Fragment>
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
        path="/collection/:id/:pantone"
        render={(props) => {
          let collection = findCollection(props.match.params.id);
          if (collection) {
            return <Shades collection={collectionWithShades(collection)} />;
          } else {
            return <NotFound />;
          }
        }}
      />
    </Fragment>
  );
}
