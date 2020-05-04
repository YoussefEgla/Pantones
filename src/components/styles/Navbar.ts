import { makeStyles } from "@material-ui/core";

export default makeStyles({
  nav: {
    height: "100%",
    width: "80%",
    margin: "0 auto",
    padding: "0 2.5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slider: {
    maxWidth: 300,
    alignSelf: "flex-end",
  },
  formControl: {
    minWidth: 125,
  },
  inputLabel: {
    maxHeight: 35,
  },
});
