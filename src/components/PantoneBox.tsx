import React, { useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    width: "19%",
    height: "24%",
    margin: "0.5%",
    cursor: "pointer",
    backgroundColor: (props: PantoneBox) => props.color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover > span": {
      opacity: 1,
    },
  },
  text: {
    opacity: "0",
    transition: "0.5s",
  },
  btnContainer: {
    width: "95%",
    margin: "0 2.5%",
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function PantoneBox(props: PantoneBox) {
  const classes = styles(props);
  return (
    <Paper className={classes.root} elevation={0}>
      <div></div>
      <Typography className={classes.text} variant="overline">
        COPY
      </Typography>
      <div className={classes.btnContainer}>
        <Typography variant="button">{props.name}</Typography>
        <Typography variant="button">Shades</Typography>
      </div>
    </Paper>
  );
}
