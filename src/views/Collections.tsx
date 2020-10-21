import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import { collectionsStyles as useStyles } from "./styles";
import { CollectionCard } from "../components";

export default function Collections(props: Collections) {
  const classes = useStyles();
  const list = props.collections.map((collection) => (
    <CollectionCard
      {...collection}
      key={collection.id}
      dispatch={{ deleteCollection: props.dispatch.deleteCollection }}
    />
  ));
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.nav}>
          <Typography variant="h5" component="p">
            Pantones Organizer
          </Typography>
          <a href="https://github.com/YoussefEgla/Pantones">
            <GitHubIcon style={{ color: "white" }} />
          </a>
          <Link to="/collection/new">
            <Button variant="contained" color="secondary">
              Create Collection
            </Button>
          </Link>
        </div>
      </header>
      <main className={classes.main}>{list}</main>
    </div>
  );
}
