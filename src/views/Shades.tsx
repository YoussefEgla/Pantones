import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import ShadeBox from "../components/ShadeBox";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
  },
});

export default function Shades(props: Shades) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <header></header>
      <ShadeBox />
    </div>
  );
}
