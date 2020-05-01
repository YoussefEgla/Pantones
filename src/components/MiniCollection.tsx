import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "White",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  section: {
    backgroundColor: "red",
  },
});

export default function MiniCollection(props: Pantones) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Mini Collection</h1>
      <section className={classes.section}>
        <h1>Mini Pantones</h1>
      </section>
    </div>
  );
}
