import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    minHeight: "100vh",
  },
  header: {
    height: "10vh",
  },
  nav: {
    height: "100%",
    width: "80%",
    margin: "0 auto",
    padding: "0 2.5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    maxWidth: "800px",
    minHeight: "800px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "space-around",
  },
});
