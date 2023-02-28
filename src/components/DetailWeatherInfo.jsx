import React from "react";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { RiWindyFill } from "react-icons/ri";
import {
  BsSunrise,
  BsSunset,
  BsArrowUpShort,
  BsArrowDownShort,
} from "react-icons/bs";

const DetailWeatherInfo = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="">
        <p>Rain</p>
      </div>
      <div className="flex items-center justify-between w-full py-1">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="weatherIcon"
          //   className="w-15"
        />
        <span className="-ml-12 sm:ml-20 text-4xl">14°</span>
        <ul className="space-y-2 ">
          <li className="flex items-center ">
            <span>
              <TbTemperature className="mr-1" />
            </span>
            Real fell:
            <span className="font-medium">14°</span>
          </li>
          <li className="flex items-center ">
            <span>
              <WiHumidity className="mr-1" />
            </span>
            Humidity:
            <span className="font-medium">20%</span>
          </li>
          <li className="flex items-center ">
            <span>
              <RiWindyFill className="mr-1" />
            </span>
            Wind :<span className="font-medium">14 km/h</span>
          </li>
        </ul>
      </div>
      <div className=" my-1 w-full hidden sm:block">
        <ul className="flex items-center justify-around w-full ">
          <li className="flex items-center ">
            <BsSunrise className="mr-1" />
            <p className="font-light ">
              Rise:<span className="font-medium ml-1">06:5 AM</span>
            </p>
            <p className="font-light mx-1">|</p>
          </li>
          <li className="flex items-center ">
            <BsSunset className="mr-1" />
            <p className="font-light">
              Set:<span className="font-medium ml-1">09:25 PM</span>
            </p>
            <p className="font-light mx-1">|</p>
          </li>
          <li className="flex items-center  ">
            <BsArrowUpShort className="mr-1" />
            <p className="font-light">
              High:<span className="font-medium ml-1">48°</span>
            </p>
            <p className="font-light mx-1">|</p>
          </li>
          <li className="flex items-center ">
            <BsArrowDownShort className="mr-1" />
            <p className="font-light">
              Low:<span className="font-medium ml-1">18°</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailWeatherInfo;
