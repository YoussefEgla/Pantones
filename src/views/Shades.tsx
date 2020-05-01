import React from "react";
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
  const classes = useStyles(props);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <ShadeBox />);
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
