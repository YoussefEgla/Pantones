import React from "react";
import { Link, useParams } from "react-router-dom";
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CopyToClipboard from "react-copy-to-clipboard";
import chroma from "chroma-js";

const styles = makeStyles({
  root: {
    width: "19.625%",
    height: "24%",
    margin: "0.125%",
    cursor: "pointer",
    backgroundColor: (props: PantoneBox) => props.color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover > span": {
      opacity: 1,
    },
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
  text: {
    opacity: "0",
    transition: "0.5s",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
  span: {
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
});

export default function PantoneBox(props: PantoneBox) {
  const { id } = useParams();
  const classes = styles(props);

  return (
    <CopyToClipboard text={props.color}>
      <Paper className={classes.root} elevation={0}>
        <div></div>
        <Typography className={classes.text} variant="overline">
          COPY
        </Typography>
        <div className={classes.btnContainer}>
          <Typography variant="button">
            <CopyToClipboard text={props.color}>
              <Button size="small">
                <span className={classes.span}>{props.name}</span>
              </Button>
            </CopyToClipboard>
          </Typography>
          <Typography variant="button" color="inherit">
            <Link to={`/collection/${id}/${props.id.split("-")[0]}`}>
              <Button size="small" color="inherit">
                <span className={classes.span}>Shades</span>
              </Button>
            </Link>
          </Typography>
        </div>
      </Paper>
    </CopyToClipboard>
  );
}
