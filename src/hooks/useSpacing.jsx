import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export const useSpacing = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  // the spacing is based on rem units
  let spacing;
  if (isLargeScreen) spacing = 10;
  else if (isMediumScreen) spacing = 6;
  else if (isSmallScreen) spacing = 2;
  return spacing;
};
