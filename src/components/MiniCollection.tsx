import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "225px",
    height: "250px",
    margin: "25px 0",
    backgroundColor: "White",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  container: {
    width: "100%",
    height: "75%",
    backgroundColor: "gray",
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
    color: "black",
  },
});

export default function MiniCollection(props: Pantones) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}></div>
      <Typography variant="button" className={classes.title}>
        <span>{props.name}</span>
        <span>{props.emoji}</span>
      </Typography>
    </div>
  );
}
