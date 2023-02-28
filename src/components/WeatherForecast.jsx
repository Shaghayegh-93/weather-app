import React from "react";
import WeatherForecastDetail from "./WeatherForecastDetail";

const   = ({ title }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-start">
        <p className="font-medium">{title}</p>
      </div>
      <hr className="my-2 border-black" />
      <div>
        <ul className="flex items-center justify-between ">
          <WeatherForecastDetail />
          <WeatherForecastDetail />
          <WeatherForecastDetail />
          <WeatherForecastDetail />
          <WeatherForecastDetail />
        </ul>
      </div>
    </div>
  );
};

export default WeatherForecast;
