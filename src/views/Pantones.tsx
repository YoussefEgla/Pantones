import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PantoneBox from "../components/PantoneBox";

const styles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  main: {
    height: "90%",
    display: "flex",
    flexWrap: "wrap",
  },
  back: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
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
