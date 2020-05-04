import React from "react";
import { Typography } from "@material-ui/core";
import { notFoundStyles as useStyles } from "./styles";

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">404 - You hit the end of the routes</Typography>
    </div>
  );
}
