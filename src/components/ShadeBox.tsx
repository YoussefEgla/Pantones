import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import CopyToClipboard from "react-copy-to-clipboard";
import chroma from "chroma-js";

const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "50%",
    backgroundColor: (props: PantoneBox) => props.color,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
  container: {
    width: "95%",
    margin: "0 2.5%",
  },
  buttomContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function ShadeBox(props: PantoneBox) {
  const classes = useStyles(props);

  return (
    <CopyToClipboard text={props.color}>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.buttomContainer}>
            <Typography variant="button">{props.name}</Typography>
            <Typography variant="button">{props.color}</Typography>
          </div>
        </div>
      </div>
    </CopyToClipboard>
  );
}
