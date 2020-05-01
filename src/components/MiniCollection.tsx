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
    height: "85%",
    margin: "0 auto",
    backgroundColor: "white",
  },
  title: {
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
  },
  mini: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-0.25rem",
    position: "relative",
  },
});

export default function MiniCollection(props: Pantones) {
  const classes = useStyles();

  const miniPantones = props.colors.map(({ name, color }) => (
    <div
      className={classes.mini}
      style={{ backgroundColor: color }}
      key={name}
    />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>{miniPantones}</div>
      <Typography variant="button" className={classes.title}>
        <span>{props.name}</span>
        <span>{props.emoji}</span>
      </Typography>
    </div>
  );
}
