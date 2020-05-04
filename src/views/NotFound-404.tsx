import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">404 - You hit the end of the routes</Typography>
    </div>
  );
}
