import { makeStyles } from "@material-ui/core";
import chroma from "chroma-js";

export default makeStyles({
  root: {
    width: "20%",
    height: "50%",
    backgroundColor: (props: PantoneBox) => props.color,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
    ["@media (max-width: 768px)"]: {
      width: "100%",
      height: "10%",
    },
  },
  container: {
    width: "95%",
    margin: "0 2.5%",
  },
  buttomContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});
