import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "50%",
    backgroundColor: "green",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  container: {
    width: "95%",
    margin: "0 2.5%",
  },
});

export default function ShadeBox(props: ShadeBox) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="button">Pantone Name</Typography>
      </div>
    </div>
  );
}
