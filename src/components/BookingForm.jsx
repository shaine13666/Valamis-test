import React from "react";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";

export function BookingForm({ onSubmit, onCancel }) {
  const { hall } = React.useContext(AppContext);
  const selectedPlaces = [];
  hall.rows.forEach((row) => {
    row
      .filter((place) => place.status === "selected")
      .forEach((place) => {
        selectedPlaces.push(place);
      });
  });

  return (
    <div>
      <h3>Booking in progress</h3>
      <p>Places selected: {selectedPlaces.length}</p>
      {selectedPlaces.length > 0 ? (
        <p>
          Total price:{" "}
          {selectedPlaces
            .map((place) => place.cost)
            .reduce((sum, cost) => sum + cost)}
        </p>
      ) : (
        <p>Total price: 0</p>
      )}
      <button className="btn mr" onClick={() => onSubmit(selectedPlaces)}>
        Confirm
      </button>
      <button className="btn" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
