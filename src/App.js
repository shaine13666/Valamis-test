import React from "react";
import "./App.css";
import { Hall } from "./components/Hall";
import { BookingForm } from "./components/BookingForm";
import { BookingHelp } from "./components/BookingHelp";
import { generateHall } from "./utils";
import { AppContext } from "./AppContext";

const originalHallRows = generateHall(2, 12);

function App() {
  const hallName = "Main hall";
  const [hallRows, setHallRows] = React.useState(originalHallRows);
  const [isBooking, setBooking] = React.useState(false);

  const handlePlaceClick = React.useCallback(
    (rowIndex, placeIndex, status) => {
      if (!isBooking || status === "busy") return;

      const copiedHallRows = [...hallRows].map((rows, index) => {
        if (rowIndex === index) {
          return rows.map((place) => {
            if (placeIndex === place.placeNumber) {
              place.status === "selected"
                ? (place.status = "free")
                : (place.status = "selected");
            }
            return place;
          });
        }
        return rows;
      });

      setHallRows(copiedHallRows);
    },
    [hallRows, isBooking]
  );

  function cancelTicketsBuy() {
    hallRows.forEach((item) => {
      item.forEach((item2) => {
        if (item2.status === "selected") {
          item2.status = "free";
        }
      });
    });

    setBooking(false);
  }

  function buyTickets(selectedPlaces) {
    if (!selectedPlaces.length) return;

    hallRows.forEach((item) => {
      item.forEach((item2) => {
        if (item2.status === "selected") {
          item2.status = "busy";
        }
      });
    });

    setBooking(false);
    setHallRows(hallRows);

    console.log(
      `You  bought ${selectedPlaces.length} tickets worth: ${selectedPlaces
        .map((place) => place.cost)
        .reduce((sum, cost) => sum + cost)} rubles`
    );
  }

  return (
    <AppContext.Provider
      value={{
        hall: {
          title: hallName,
          rows: hallRows,
        },
        isBooking: isBooking,
        setPlaceStatus: (r, p, status) => {
          handlePlaceClick(r, p, status);
        },
      }}
    >
      <div className="App">
        <Hall />
        <br />
        {!isBooking ? (
          <button className="btn" onClick={() => setBooking(true)}>
            Buy tickets
          </button>
        ) : (
          <div className="boocking-form">
            <h3>Please select places</h3>
            <BookingHelp />
            <BookingForm onCancel={cancelTicketsBuy} onSubmit={buyTickets} />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
