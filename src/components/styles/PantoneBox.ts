import { makeStyles } from "@material-ui/core";
import chroma from "chroma-js";

export default makeStyles({
  root: {
    width: "19.625%",
    height: "24%",
    margin: "0.125%",
    cursor: "pointer",
    backgroundColor: (props: PantoneBox) => props.color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover > span": {
      opacity: 1,
    },
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
    ["@media (max-width: 768px)"]: {
      width: "100%",
      height: "10%",
    },
  },

  text: {
    opacity: "0",
    transition: "0.5s",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
  span: {
    color: (props: PantoneBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
});
