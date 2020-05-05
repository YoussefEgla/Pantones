import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { newCollectionStyles as useStyles } from "./styles";
import { DraggableBox, ColorPicker } from "../components";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true); // drawer state
  const [currentColor, setCurrentColor] = React.useState({
    color: "#000000",
    name: "black",
  }); // current color state
  const [colors, setColors] = useState([currentColor]); // colors array

  function addColor(color: { name: string; color: string }): void {
    setColors([...colors, color]);
  }
  return (
    <div className={classes.root}>
      <ColorPicker
        dispatch={{ setOpen, setCurrentColor, addColor }}
        open={open}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map((color) => (
          <DraggableBox {...color} key={color.color} />
        ))}
      </main>
    </div>
  );
}
