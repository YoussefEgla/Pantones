import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Fade } from "@material-ui/core";
import PantoneBox from "../components/PantoneBox";
import ShadeBox from "../components/ShadeBox";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { filterShades } from "../utils/shades";

const styles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  header: {
    width: "100%",
    height: "9.5%",
    marginBottom: "0.25%",
    padding: 0,
  },
  main: {
    height: "80%",
    display: "flex",
    flexWrap: "wrap",
  },
  footer: {
    width: "90%",
    height: "10%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default function Pantones(props: PantonesWithShades) {
  const [colorFormat, setColorFormat] = useState("hex"); // color format state
  const [shade, setShade] = useState(500); // shade state
  const [animateList, setAnimateList] = useState(false);
  const classes = styles();
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
        <Typography variant="h6">
          {props.name} &nbsp;{props.emoji}
        </Typography>
      </footer>
    </div>
  );
}
