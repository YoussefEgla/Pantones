import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

import { collectionsStyles as useStyles } from "./styles";
import { CollectionCard } from "../components";

export default function Collections(props: Collections) {
  const classes = useStyles();
  const list = props.collections.map((collection) => (
    <CollectionCard {...collection} key={collection.id} />
  ));
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.nav}>
          <Typography variant="h5" component="p">
            Pantones
          </Typography>
          <Link to="/collection/new">
            <Button variant="contained" color="primary">
              Create Collection
            </Button>
          </Link>
        </div>
      </header>
      <main className={classes.main}>{list}</main>
    </div>
  );
}
