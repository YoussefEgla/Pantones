import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import ShadeBox from "../components/ShadeBox";

const useStyles = makeStyles({
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

export default function Shades(props: Shades) {
  const { id, pantone } = useParams();
  const classes = useStyles(props);
  const shades = getShades(props.collection, pantone);
  // @ts-ignore
  const list = shades.map((pantone) => (
    <ShadeBox
      name={pantone.name}
      id={pantone.id}
      color={pantone.hex}
      key={pantone.id}
    />
  ));
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <nav>navbar</nav>
      </header>
      <main className={classes.main}>{list}</main>
      <footer className={classes.footer}>Footer</footer>
    </div>
  );
}

function getShades(collection: PantonesWithShades, colorToFilter: string) {
  let shades: any = [];
  let allColors = collection.colors;

  for (let key in allColors) {
    shades.push(
      ...allColors[key].filter(
        (color) => color.id.split("-")[0] === colorToFilter
      )
    );
  }

  return shades.slice(1);
}
