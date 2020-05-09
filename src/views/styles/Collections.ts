import { makeStyles } from "@material-ui/core";
import collectionsBackground from "./collections-bg.svg";

export default makeStyles({
  root: {
    height: "auto",
    background: `url(${collectionsBackground}) center center`,
    backgroundRepeat: "repeat",
  },
  header: {
    height: "10vh",
  },
  nav: {
    height: "100%",
    width: "95%",
    margin: "0 auto",
    padding: "0 2.5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  main: {
    maxWidth: "800px",
    minHeight: "90vh",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "space-around",
  },
});
