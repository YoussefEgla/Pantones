import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@material-ui/core/";
import { newCollectionStyles as useStyles } from "./styles";
import { ChromePicker } from "react-color";
import chroma from "chroma-js";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // drawer state
  const [color, setColor] = React.useState("white");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
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
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <p style={{ margin: "0 auto" }}>Pick a pantone</p>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.drawerContent}>
          <ChromePicker
            color={color}
            onChangeComplete={(newColor) => setColor(newColor.hex)}
          />
          <div className={classes.buttonsContainer}>
            <Button
              variant="contained"
              size="medium"
              style={{
                backgroundColor: color,
                color: chroma(color).luminance() <= 0.35 ? "white" : "black",
              }}
            >
              Add Color
            </Button>
          </div>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
