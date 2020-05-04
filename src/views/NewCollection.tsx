import React from "react";
import { notFoundStyles as useStyles } from "./styles";

export default function NewCollection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>New Collection View</h1>
    </div>
  );
}
