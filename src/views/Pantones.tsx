import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PantoneBox from "../components/PantoneBox";

const styles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  main: {
    height: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  back: {
    width: "19%",
    height: "24%",
    margin: "0.5%",
    cursor: "pointer",
    color: "#ffffff",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Pantones(props: Pantones) {
  const classes = styles();
  const list = props.colors.map(({ name, color }) => (
    <PantoneBox name={name} color={color} key={name} />
  ));
  return (
    <div className={classes.root}>
      <header>
        <nav>{/** Navigation things */}</nav>
      </header>
      <main className={classes.main}>
        {list}
        <div className={classes.back}>
          <span>Go Back!</span>
        </div>
      </main>
      <footer>{/** Footer Content */}</footer>
    </div>
  );
}
