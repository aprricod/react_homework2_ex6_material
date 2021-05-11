import React from "react";

// можно писать через стрелочную функцию и тогда передавать html код внутрь () и не нужно return

// const Weather = props => ()

function Weather(props) {
  return (
    <div>
      {props.city && (
        <div>
          <p>
            Местоположение: {props.city}, {props.country}
          </p>
          <p>Температура: {props.temp}</p>
          <p>Давление: {props.pressure}</p>
          <p>Закат солнца: {props.sunset}</p>
        </div>
      )}
      <p>{props.error}</p>
    </div>
  );
}

export default Weather;
