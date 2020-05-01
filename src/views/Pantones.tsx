import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Collapse } from "@material-ui/core";
import PantoneBox from "../components/PantoneBox";
import Navbar from "../components/PantoneNavbar";

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
    justifyContent: "center",
  },
  back: {
    width: "19.625%",
    height: "24%",
    margin: "0.125%",
    cursor: "pointer",
    color: "#ffffff",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

  /**
   * Render List of PantoneBoxes
   */
  const list = props.colors[shade].map((pantone) => {
    return (
      <PantoneBox
        name={pantone.name}
        color={pantone[colorFormat as ColorFormat]}
        key={pantone.id}
      />
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimateList(true);
    }, 250);
  }, []);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Navbar
          dispatch={{ setAnimateList, setShade, setColorFormat }}
          colorFormat={colorFormat}
        />
      </header>

      <main className={classes.main}>
        {list}
        <div className={classes.back}>
          <span>Go Back!</span>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6">
          {props.name} &nbsp;{props.emoji}
        </Typography>
      </footer>
    </div>
  );
}
