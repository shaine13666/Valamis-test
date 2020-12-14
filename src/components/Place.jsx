import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import PropTypes from "prop-types";

export function Place(props) {
  const { place, rowIndex } = props;
  const { placeNumber, status } = place;
  const { isBooking, setPlaceStatus } = useContext(AppContext);

  return (
    <div
      className={`seat ${status}`}
      onClick={() => {
        if (isBooking) setPlaceStatus(rowIndex, placeNumber, status);
      }}
    >
      {placeNumber + 1}
    </div>
  );
}

Place.propTypes = {
  place: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
};
