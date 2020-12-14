import React from "react";

export function BookingHelp() {
  return (
    <div className="places-info">
      <div className="place-info">
        <div className="seat free"></div>
        <span>Free</span>
      </div>
      <div className="place-info">
        <div className="seat selected"></div>
        <span>Selected</span>
      </div>
      <div className="place-info">
        <div className="seat busy"></div>
        <span>Busy</span>
      </div>
    </div>
  );
}
