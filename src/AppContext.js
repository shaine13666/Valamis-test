import React from "react";

export const AppContext = React.createContext({
  hall: {
    title: "",
    rows: [],
  },
  isBooking: false,
  setPlaceStatus: (rowIndex, placeIndex, status) => {},
});
