import React from "react";
import { Link, useParams } from "react-router-dom";
import { Paper, Typography, Button } from "@material-ui/core";
import CopyToClipboard from "react-copy-to-clipboard";
import { pantoneBoxStyles as useStyles } from "./styles";

export default function PantoneBox(props: PantoneBox) {
  const { id } = useParams();
  const classes = useStyles(props);

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
