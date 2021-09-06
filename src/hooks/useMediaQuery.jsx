import React from "react";
import { useMediaQuery as useMedaQueryMui } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export const useMediaQuery = () => {
  const theme = useTheme();
  const isLargeScreen = useMedaQueryMui(theme.breakpoints.between("lg", "xl"));
  const isMediumScreen = useMedaQueryMui(theme.breakpoints.only("md"));
  const isSmallScreen = useMedaQueryMui(theme.breakpoints.between("xs", "sm"));
  return [isSmallScreen, isMediumScreen, isLargeScreen];
};
