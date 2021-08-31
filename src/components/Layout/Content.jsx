import { Box } from "@material-ui/core";
import React from "react";

export const Content = ({ children }) => {
  return <Box style={{ minHeight: "100vh" }}>{children}</Box>;
  // return children;
};
