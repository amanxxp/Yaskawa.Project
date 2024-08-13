import React from "react";

const Log = ({ Points }) => {
  console.log(Points);
  return (
    <div>
      <h2 className="text-center text-[40px]  font-semibold mt-2 mb-2 text-blue-800">
        Control Points
      </h2>
      <div className="h-[1px] bg-black mb-6 "></div>
      <ul>
        {Points.map((point, index) => (
          <div className="m-4" key={index}>
            <div className="ml-4"> Point {index + 1}:</div>
            <div className="ml-12">X-axis : {point.x.toFixed(2)}</div>
            <div className="ml-12">Y-axis : {point.y.toFixed(2)}</div>
            <div className="ml-12">Z-axis : {point.z.toFixed(2)}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Log;
