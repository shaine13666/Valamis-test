import React from "react";
import PropTypes from "prop-types";
import { HallRow } from "./HallRow";
import { AppContext } from "./../AppContext";

export function Hall() {
  const { hall } = React.useContext(AppContext);
  const { title, rows } = hall;
  return (
    <div className="Hall">
      <h1 className="title">{title}</h1>
      <MovieInfo title="Mission impossible 8" price={100} />
      <div className="screen-container">
        <div className="screen"></div>
      </div>
      <div className="seats">
        {rows.map((places, index) => {
          return <HallRow key={index} places={places} rowIndex={index} />;
        })}
      </div>
    </div>
  );
}

function MovieInfo(props) {
  const { title, price } = props;
  return (
    <div>
      <h3 className="cinema-title">{title}</h3>
      <span className="cinema-price">Price: from {price} rubles</span>
    </div>
  );
}

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
