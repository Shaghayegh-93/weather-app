import React from "react";

const TimeAndLocation = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
      <div className="my-3 ">
        <p className="font-extralight sm:text-lg">
          Tuseday,31 May 2022 |Local time:12:17 PM
        </p>
      </div>
      <div className="sm:font-extralight sm:text-lg font-bold">
        <p>Berlin,DE</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
