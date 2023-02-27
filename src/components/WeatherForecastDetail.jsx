import React from "react";

const WeatherForecastDetail = () => {
  return (
    <div>
      <ul className="flex flex-col items-center j">
        <li>12:00 pm</li>
        <li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="weatherIcon"
          />
        </li>
        <li>14°</li>
      </ul>
    </div>
  );
};

export default WeatherForecastDetail;
