import "./App.css";
import CityList from "./components/CityList";
import DetailWeatherInfo from "./components/DetailWeatherInfo";
import InputCity from "./components/InputCity";
import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  return (
    <div className="w-full h-screen px-4">
      <div className=" max-w-[1000px] w-full mx-auto bg-green-200 mt-4 py-5 sm:px-32 px-4">
        <CityList />
        <InputCity />
        <TimeAndLocation />
        <DetailWeatherInfo/>
      </div>
    </div>
  );
}

export default App;
