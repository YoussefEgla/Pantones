import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    width: "225px",
    height: "250px",
    margin: "25px 0",
    backgroundColor: "White",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "85%",
    margin: "0 auto",
    backgroundColor: "white",
  },
  title: {
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
  },
  link: {
    width: "100%",
    height: "100%",
  },
  mini: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-0.25rem",
    position: "relative",
  },
});
