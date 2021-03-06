import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { draggableBoxStyles as useStyles } from "./styles";

export default function DraggableBox(props: DraggableBox) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Button size="small" className={classes.btnColor}>
          {props.name}
        </Button>
        <Button
          size="small"
          className={classes.btnColor}
          onClick={() =>
            props.dispatch.removeColor({ name: props.name, color: props.color })
          }
          endIcon={<DeleteIcon />}
        ></Button>
      </div>
    </div>
  );
}
