export function generateHall(amountOfRows, amountOfPlacesInRow) {
  let rows = [];
  for (let i = 0; i < amountOfRows; i++) {
    rows[i] = generateRow(i, amountOfPlacesInRow);
  }
  return rows;
}

function generateRow(rowIndex, placesAmount) {
  let places = [];
  for (let i = 0; i < placesAmount; i++) {
    places[i] = {
      placeNumber: i,
      status: Math.random() > 0.5 ? "busy" : "free",
      cost: 100 + rowIndex * 10, // to make price depend on row index, just for kicks
    };
  }
  return places;
}
