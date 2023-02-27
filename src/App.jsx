import "./App.css";
import CityList from "./components/CityList";
import DetailWeatherInfo from "./components/DetailWeatherInfo";
import InputCity from "./components/InputCity";
import TimeAndLocation from "./components/TimeAndLocation";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    
      <div className=" max-w-screen-md h-fit mx-auto bg-green-200 my-4 py-4 sm:px-32 px-4 shadow-xl ">
        <CityList />
        <InputCity />
        <TimeAndLocation />
        <DetailWeatherInfo />
        <WeatherForecast title="HOURLY FORECAT" />
        <WeatherForecast title="DAILY FORECAT" />
      </div>
  
  );
}

export default App;
