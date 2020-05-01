import React from "react";
import { Link } from "react-router-dom";

export default function CollectionsList(props: CollectionsList) {
  const list = props.collections.map((collection) => (
    <Link to={`/collection/${collection.id}`}>{collection.name}</Link>
  ));
  return (
    <div>
      <h1>Pantones</h1>
      {list}
    </div>
  );
}
