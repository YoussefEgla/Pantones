import { makeStyles } from "@material-ui/core";

export default makeStyles({
  nav: {
    height: "100%",
    width: "95%",
    margin: "0 auto",
    padding: "0 2.5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slider: {
    maxWidth: 300,
    alignSelf: "flex-end",
    ["@media (max-width: 768px)"]: {
      maxWidth: "350",
      alignSelf: "flex-end",
      marginBottom: "-15px",
    },
  },
  formControl: {
    minWidth: 125,
  },
  inputLabel: {
    maxHeight: 35,
  },
});
