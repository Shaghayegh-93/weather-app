import React from "react";

const CityList = () => {
  const cities = [
    { id: Math.floor(Math.random() * 1000), title: "london" },
    { id: Math.floor(Math.random() * 1000), title: "manchester" },
    { id: Math.floor(Math.random() * 1000), title: "manchester" },
    { id: Math.floor(Math.random() * 1000), title: "manchester" },
  ];
  return (
    <div className=" mb-2">
      <ul className="hidden  sm:flex items-center justify-between ">
        {cities.map((city) => (
          <li key={city.id} className="cursor-pointer md:text-lg md:font-medium ">
            {city.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
