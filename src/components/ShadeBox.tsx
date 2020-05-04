import React from "react";
import { Typography } from "@material-ui/core";
import CopyToClipboard from "react-copy-to-clipboard";
import { shadeBoxStyles as useStyles } from "./styles";

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
