import React from "react";

export const useLayout = (items = 1) => {
  // let layout;
  // if (items === 3) {
  //   layout = {
  //     lg: 4,
  //     xs: 12,
  //   };
  // } else {
  //   layout = {
  //     lg: 6,
  //     xs: 12,
  //   };
  // }
  const gridColumns = 12;
  let layout = {
    lg: gridColumns / items,
    xs: gridColumns,
  };

  return layout;
};
