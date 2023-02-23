import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const InputCity = () => {
  return (
    <form action="/">
      <div
        className="flex justify-around items-center my-6 w-full
      "
      >
        <div className="flex items-center gap-4 ">
          <input
            type="text"
            className="py-2 px-4 outline-none capitalize"
            placeholder="Search..."
          />
          <AiOutlineSearch
            size={20}
            className="cursor-pointer text-white transition ease-out hover:scale-125"
          />
          <IoLocationOutline
            size={20}
            className="cursor-pointer text-white transition ease-out hover:scale-125"
          />
        </div>
        <div className="flex cursor-pointer items-center justify-center">
          <a href="/"> °C|</a>
          <a href="/"> °F</a>
        </div>
      </div>
    </form>
  );
};

export default InputCity;
