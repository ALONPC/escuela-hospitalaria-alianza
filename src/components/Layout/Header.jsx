import { Button } from "@material-ui/core";
import React from "react";

export const Header = () => {
  return (
    <div>
      <a>Inicio</a>
      <a>Escuela</a>
      <a>Documentos</a>

      <Button variant="contained" color="primary">
        Ingresar
      </Button>
    </div>
  );
};
