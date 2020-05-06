import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { newCollectionStyles as useStyles } from "./styles";
import { DraggableBox, ColorPicker } from "../components";

export default function NewCollection(props: NewCollection) {
  const classes = useStyles();
  const history = useHistory();
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

  /**
   * Remove color from colors array
   */
  function removeColor(colorToRemove: { name: string; color: string }) {
    setColors(
      colors.filter((color) => {
        return color.color !== colorToRemove.color;
      })
    );
  }

  /**
   * Handle Collection submit
   */
  function handleSubmit(collectionName: string) {
    if (collectionName.length < 5) return "Collection must have a name";
    if (colors.length < 3) return "You need at least 10 pantones";
    // format seed collection from data available
    const newCollection: SeedCollection = {
      name: collectionName,
      id: collectionName.replace(" ", "-"),
      emoji: "",
      colors,
    };
    // add collection created to collections
    props.dispatch.addCollection(newCollection);
    // redirect to root view
    history.push("/");
    return "";
  }

  return (
    <div className={classes.root}>
      <ColorPicker dispatch={{ setOpen, addColor, handleSubmit }} open={open} />
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
