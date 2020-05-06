import React, { useState } from "react";
import clsx from "clsx";
import { newCollectionStyles as useStyles } from "./styles";
import { DraggableBox, ColorPicker } from "../components";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true); // drawer state
  const [colors, setColors] = useState([{ name: "black", color: "#000000" }]); // colors array

  function addColor(newColor: { name: string; color: string }): string {
    for (let color of colors) {
      if (
        newColor.name.toLowerCase() === color.name.toLowerCase() ||
        newColor.name === ""
      ) {
        return "Name has to be unique";
      }
      if (newColor.color === color.color) {
        return "Pantone has to be unique";
      }
    }
    if (colors.length >= 20) return "You can't add more than 20";
    setColors([...colors, newColor]);
    return "";
  }
  function removeColor(colorToRemove: { name: string; color: string }) {
    setColors(
      colors.filter((color) => {
        return color.color !== colorToRemove.color;
      })
    );
  }
  return (
    <div className={classes.root}>
      <ColorPicker dispatch={{ setOpen, addColor }} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map((color) => (
          <DraggableBox
            {...color}
            key={color.color}
            dispatch={{ removeColor }}
          />
        ))}
      </main>
    </div>
  );
}
