import React, { useState } from "react";
import { Button } from "../Atoms/Button";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Grid,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Logo } from "../Atoms/Logo";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2),
  },
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  mobileNav: {
    padding: theme.spacing(2),
  },
  drawer: {
    overflowY: "unset",
  },
}));

const options = [
  {
    to: "/",
    name: "Inicio",
    type: "link",
  },
  {
    to: "/about",
    name: "Escuela",
    type: "link",
  },
  {
    to: "/documents",
    name: "Documentos",
    type: "link",
  },
];

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const Menu = () => (
    <Grid
      container
      spacing={1}
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.header}
    >
      <Grid container item xs={4} justifyContent="space-evenly">
        {options.map((option) => (
          <Button {...option}>{option.name}</Button>
        ))}
      </Grid>
      {!isMobile && (
        <Grid container item xs={4} justifyContent="center">
          <Logo></Logo>
        </Grid>
      )}
      <Grid container item xs={4} justifyContent="center">
        <Button style={{ width: 180 }} size="large">
          Ingresar
        </Button>
      </Grid>
    </Grid>
  );

  return isMobile ? (
    <div className={classes.mobileNav}>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Button
            onClick={toggleDrawer}
            startIcon={<MenuIcon style={{ fontSize: 48 }} />}
            type="link"
          ></Button>
        </Grid>
        {/* can be both container and item so flex properties may apply */}
        <Grid container item xs={4} justifyContent="center">
          <Logo></Logo>
        </Grid>
      </Grid>
      <SwipeableDrawer
        // correct way of overriding drawer overflow hidden (a random scroll appeared for both X and Y axis)
        classes={{
          paper: classes.drawer,
        }}
        anchor="top"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Menu></Menu>
      </SwipeableDrawer>
    </div>
  ) : (
    <Menu></Menu>
  );
};
