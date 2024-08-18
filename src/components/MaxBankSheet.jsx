import React, { useState } from "react";
import { useRecoilState } from "recoil";
import imageState from "../atoms/bomb";
import banksheet from "/Banksheet.png";

function MaxBankSheet() {
  const [maxbank, setmaxbank] = useState(false);
  const handlemaxbankclick = () => {
    setmaxbank(!maxbank);
    console.log(maxbank);
  };
  const [image, setimage] = useRecoilState(imageState);
  return (
    <>
      <div
        onClick={handlemaxbankclick}
        className="flex justify-between border-2 border-b-4 mb-2"
      >
        <div>
          <h1 className="text-2xl mt-1 ml-2">Max Bank Sheet(Approx)</h1>
          <p className="text-xs ml-2 mb-2">Choose an option</p>
        </div>
        <div className="mr-2 mt-1">selected item</div>
      </div>
      {maxbank && (
        <div className="flex gap-2 m-2">
          <div className="border-2  p-4   font-semibold">
            <img
              src={banksheet}
              alt=""
              className="border-2 border-solid  h-20 w-20"
              onClick={() =>
                setimage(
                  "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965190/yaskawa/mbu4het8fp4z8hnecszl.jpg"
                )
              }
            />
            <div className="text-sm text-center">600 X 1,300</div>
          </div>
          <div className="border-2   p-4 align-mid  font-semibold">
            <img
              src={banksheet}
              alt=""
              className="border-2 border-solid  h-20 w-20"
              onClick={() =>
                setimage(
                  "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965190/yaskawa/mbu4het8fp4z8hnecszl.jpg"
                )
              }
            />
            <div className="text-sm text-center">900 X 1,700</div>
          </div>
          <div className="border-2  p-4 font-semibold">
            <img
              src={banksheet}
              alt=""
              className="border-2 border-solid  h-20 w-20"
              onClick={() =>
                setimage(
                  "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965190/yaskawa/mbu4het8fp4z8hnecszl.jpg"
                )
              }
            />
            <div className="text-sm text-center">1,300 X 2,300</div>
          </div>
        </div>
      )}
    </>
  );
}

export default MaxBankSheet;
