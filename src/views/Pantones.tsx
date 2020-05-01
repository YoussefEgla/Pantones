import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Divider,
  Slider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grow,
} from "@material-ui/core";
import PantoneBox from "../components/PantoneBox";

const styles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  header: {
    width: "100%",
    height: "10%",
    margin: 0,
    padding: 0,
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
    height: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  back: {
    width: "19%",
    height: "24%",
    margin: "0.5%",
    cursor: "pointer",
    color: "#ffffff",
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
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

type ColorFormat = "hex" | "rgb" | "rgba";
export default function Pantones(props: PantonesWithShades) {
  const [colorFormat, setColorFormat] = useState("hex"); // color format state
  const [shade, setShade] = useState(500); // shade state
  const [animateList, setAnimateList] = useState(false);
  const classes = styles();

  /**
   * Render List of PantoneBoxes
   */
  const list = props.colors[shade].map((pantone) => {
    return (
      <PantoneBox
        name={pantone.name}
        color={pantone[colorFormat as ColorFormat]}
        key={pantone.id}
      />
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimateList(true);
    }, 250);
  }, []);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <Typography variant="h5" component="p">
            Pantones
          </Typography>
          <Slider
            className={classes.slider}
            defaultValue={500}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={100}
            marks
            min={100}
            max={900}
            onChange={(event, value) => {
              setAnimateList(false);
              setTimeout(() => {
                setAnimateList(true);
              }, 250);
              setShade(value as number);
            }}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              className={classes.inputLabel}
              id="demo-simple-select-outlined-label"
            >
              Color Format
            </InputLabel>
            <Select
              className={classes.inputLabel}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={colorFormat}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setColorFormat(event.target.value as string);
              }}
              label="Color Format"
            >
              <MenuItem value={"hex"}>HEX</MenuItem>
              <MenuItem value={"rgb"}>RGB</MenuItem>
              <MenuItem value={"rgba"}>RGBA</MenuItem>
            </Select>
          </FormControl>
        </nav>
        <Divider />
      </header>
      <Grow in={animateList}>
        <main className={classes.main}>
          {list}
          <div className={classes.back}>
            <span>Go Back!</span>
          </div>
        </main>
      </Grow>
      <footer>Hello</footer>
    </div>
  );
}

function valuetext(value: number) {
  return `${value} Shade`;
}
