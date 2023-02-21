import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const InputCity = () => {
  return (
    <form action="/">
      <div className="flex justify-around items-center my-6
      ">
        <div className="flex items-center gap-4 ">
          <input type="text" className="py-2 px-4 outline-none" />
          <AiOutlineSearch size={20} />
          <IoLocationOutline size={20}/>
        </div>
        °C|°F
      </div>
    </form>
  );
};

export default InputCity;
