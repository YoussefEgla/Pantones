import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Fade, Button } from "@material-ui/core";
import PantoneBox from "../components/PantoneBox";
import ShadeBox from "../components/ShadeBox";
import Navbar from "../components/Navbar";
import { filterShades } from "../services/shades";
import { oneCollectionStyles as useStyles } from "./styles";

export default function OneCollection(props: PantonesWithShades) {
  const classes = useStyles();

  const [colorFormat, setColorFormat] = useState("hex"); // color format state
  const [shade, setShade] = useState(500); // shade state
  const [animateList, setAnimateList] = useState(false);
  const { id, pantone } = useParams();
  const shades = filterShades(props, pantone);

  /**
   * Render List of PantoneBoxes
   */
  const pantoneList = props.colors[shade].map((pantone) => {
    return (
      <PantoneBox
        id={pantone.id}
        name={pantone.name}
        color={pantone[colorFormat as ColorFormat]}
        key={pantone.id}
      />
    );
  });

  // @ts-ignore
  const shadesList = shades.map((pantone) => (
    <ShadeBox
      name={pantone.name}
      id={pantone.id}
      color={pantone.hex}
      key={pantone.id}
    />
  ));

  useEffect(() => {
    setTimeout(() => {
      setAnimateList(true);
    }, 50);
  }, []);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Navbar
          dispatch={{ setAnimateList, setShade, setColorFormat }}
          colorFormat={colorFormat}
        />
      </header>

      <Fade in={animateList}>
        <main className={classes.main}>
          {id && !pantone ? pantoneList : shadesList}
        </main>
      </Fade>
      <footer className={classes.footer}>
        {id && !pantone ? (
          <Button>
            <Typography variant="h6">
              {props.name} &nbsp;{props.emoji}
            </Typography>
          </Button>
        ) : (
          <Link to={`/collection/${props.id}`}>
            <Button variant="outlined">Back &nbsp;{props.emoji}</Button>
          </Link>
        )}
      </footer>
    </div>
  );
}
