import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ChromePicker } from "react-color";
import { colorPickerStyles as useStyles } from "./styles";
import clsx from "clsx";
import chroma from "chroma-js";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  TextField,
  IconButton,
  Divider,
  Button,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function ColorPicker(props: ColorPicker) {
  const classes = useStyles();
  const theme = useTheme();
  const [currentColor, setCurrentColor] = useState({
    name: "",
    color: "#000000",
  });
  const [message, setMessage] = useState("");

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => props.dispatch.setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ color: "white" }}>
            <Typography variant="h6" noWrap>
              Pantones
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="overline">{message}</Typography>
          <IconButton onClick={() => props.dispatch.setOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div>
          <div className={classes.drawerContent}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                size="medium"
                variant="contained"
                color="primary"
                style={{ marginBottom: "15px" }}
              >
                Random Color
              </Button>
              <ChromePicker
                color={currentColor.color}
                onChangeComplete={(newColor) =>
                  setCurrentColor({
                    ...currentColor,
                    color: newColor.hex,
                  })
                }
              />
              <div className={classes.buttonsContainer}>
                <TextField
                  label="Color name"
                  variant="filled"
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setCurrentColor({
                      ...currentColor,
                      name: e.target.value,
                    })
                  }
                />
                <Button
                  variant="contained"
                  size="medium"
                  style={{
                    backgroundColor: currentColor.color,
                    color:
                      chroma(currentColor.color).luminance() <= 0.35
                        ? "white"
                        : "black",
                  }}
                  onClick={(e) =>
                    setMessage(props.dispatch.addColor(currentColor))
                  }
                >
                  Add Color
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              justifySelf: "flex-end",
            }}
          >
            <Typography></Typography>
          </div>
        </div>
      </Drawer>
    </Fragment>
  );
}
