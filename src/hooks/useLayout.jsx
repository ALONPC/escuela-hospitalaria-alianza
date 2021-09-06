import React from "react";

export const useLayout = (items = 1) => {
  const gridColumns = 12;
  let layout = {
    lg: gridColumns / items,
    xs: gridColumns,
  };

  return layout;
};
