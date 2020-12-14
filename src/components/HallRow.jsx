import React from "react";
import PropTypes from "prop-types";
import { Place } from "./Place";

export function HallRow(props) {
  const { rowIndex, places } = props;

  return (
    <div className="row">
      <span>{`Ряд ${rowIndex + 1}`}</span>
      {places.map((place, i) => {
        return <Place key={i} place={place} rowIndex={rowIndex} />;
      })}
    </div>
  );
}

HallRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};
