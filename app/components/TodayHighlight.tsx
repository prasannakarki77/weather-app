import React from "react";

const TodayHighlight = () => {
  return (
    <div className="mt-10">
      <h1 className="text-white text-xl mb-6">Today&apos;s Highlight</h1>
      <div className=" grid grid-cols-2 grid-rows-2 gap-4">
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Wind status</h3>
          <p className=" text-xl">
            <span className=" text-6xl">7</span>mph{" "}
          </p>
        </div>
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Humidity</h3>
          <p className=" text-xl">
            <span className=" text-6xl">84</span>%{" "}
          </p>
        </div>
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Visibility</h3>
          <p className=" text-xl">
            <span className=" text-6xl">6,4</span>miles{" "}
          </p>
        </div>
        <div className=" bg-custom-secondary p-4 flex flex-col justify-center gap-3  items-center">
          <h3>Air Pressure</h3>
          <p className=" text-xl">
            <span className=" text-6xl">998</span>mb{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
