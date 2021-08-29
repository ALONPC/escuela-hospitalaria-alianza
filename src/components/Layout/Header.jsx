import React from "react";
import { Button } from "../Atoms/Button";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Logo } from "../Atoms/Logo";

const useStyles = makeStyles({
  header: {
    padding: 16,
  },
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const HeaderGridItem = ({ children }) => (
  <Grid container item xs={4} justifyContent="space-evenly">
    {children}
  </Grid>
);

export const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.header}
    >
      <HeaderGridItem>
        <Button type="link" to="/">
          Inicio
        </Button>
        <Button type="link" to="/about">
          Escuela
        </Button>
        <Button type="link" to="/documents">
          Documentos
        </Button>
      </HeaderGridItem>
      <HeaderGridItem>
        <Logo></Logo>
      </HeaderGridItem>
      <HeaderGridItem>
        <Button size="large">Ingresar</Button>
      </HeaderGridItem>
    </Grid>
  );
};
