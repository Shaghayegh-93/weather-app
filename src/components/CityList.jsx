import React from "react";

const CityList = () => {
  const cities = [
    { id: Math.floor(Math.random() * 1000), title: "london" },
    { id: Math.floor(Math.random() * 1000), title: "manchester" },
    { id: Math.floor(Math.random() * 1000), title: "manchester" },
    { id: Math.floor(Math.random() * 1000), title: "manchester" },
    { id: Math.floor(Math.random() * 1000), title: "manchester" },
  ];
  return (
    <div>
      <ul className="flex items-center justify-around ">
        {cities.map((city) => (
          <li key={city.id} className="cursor-pointer text-lg font-medium">
            {city.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;