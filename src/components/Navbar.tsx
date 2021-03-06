import React, { Fragment, useState } from "react";
import {
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { navbarStyles as useStyles } from "./styles";

export default function Navbar(props: PantoneNavbar) {
  const { pantone } = useParams();
  const classes = useStyles();
  const { colorFormat } = props;
  const { setAnimateList, setShade, setColorFormat } = props.dispatch;
  const [snackbar, setSnackbar] = useState(false);

  return (
    <Fragment>
      <nav className={classes.nav}>
        <Link to="/">
          <Typography variant="h5" component="p">
            Pantones
          </Typography>
        </Link>

        {!pantone ? (
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
              }, 350);
              setShade(value as number);
            }}
          />
        ) : null}

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
              setSnackbar(true);
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

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        message={
          <span>Color format changed to: {colorFormat.toUpperCase()}</span>
        }
        action={
          <IconButton
            onClick={() => setSnackbar(false)}
            color="inherit"
            key="close"
            aria-label="close"
            children={<CloseIcon />}
          />
        }
      />
    </Fragment>
  );
}

function valuetext(value: number) {
  return `${value} Shade`;
}
