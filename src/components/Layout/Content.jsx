import { Box } from "@material-ui/core";
import React from "react";
import { useSpacing } from "../../hooks/useSpacing";

export const Content = ({ children }) => {
  const spacing = useSpacing();
  return (
    <Box style={{ minHeight: "100vh", marginBottom: `${spacing}rem` }}>
      {children}
    </Box>
  );
};
