import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  header: {
    width: "100%",
    height: "9.5vh",
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
