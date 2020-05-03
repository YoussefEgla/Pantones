import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Typography, Button } from "@material-ui/core";
import MiniCollection from "../components/MiniCollection";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  header: {
    height: "10vh",
  },
  nav: {
    height: "100%",
    width: "80%",
    margin: "0 auto",
    padding: "0 2.5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    maxWidth: "800px",
    minHeight: "800px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "space-around",
  },
});

export default function CollectionsList(props: CollectionsList) {
  const classes = useStyles();
  const list = props.collections.map((collection) => (
    <MiniCollection {...collection} key={collection.id} />
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
