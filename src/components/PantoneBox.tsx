import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    cursor: "pointer",
    backgroundColor: (props: PantoneBox) => props.color,
  },
});

export default function PantoneBox(props: PantoneBox) {
  const classes = styles(props);

  return (
    <div className={classes.root}>
      <div>PantoneBox</div>
      <div></div>
    </div>
  );
}
