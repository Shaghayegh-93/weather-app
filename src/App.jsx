import "./App.css";
import CityList from "./components/CityList";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full max-w-[1000px] mx-auto bg-green-200 mt-4 py-5 px-32">
        <CityList />
      </div>
    </div>
  );
}

export default App;
