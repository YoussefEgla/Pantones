import { makeStyles } from "@material-ui/core";
import chroma from "chroma-js";

export default makeStyles({
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    backgroundColor: (props: DraggableBox) => props.color,
    color: (props: DraggableBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
  container: {
    height: "100%",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  btnColor: {
    color: (props: DraggableBox) =>
      chroma(props.color).luminance() <= 0.35 ? "white" : "black",
  },
});
