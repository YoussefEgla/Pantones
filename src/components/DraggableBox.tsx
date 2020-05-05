import React from "react";
import { draggableBoxStyles as useStyles } from "./styles";

export default function DraggableBox(props: DraggableBox) {
  const classes = useStyles(props);

  return <div className={classes.root}>{props.name}</div>;
}
