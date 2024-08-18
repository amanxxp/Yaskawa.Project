import React, { useState } from "react";
import { useRecoilState } from "recoil";
import imageState from "../atoms/bomb";
import ton45 from "/ton45.png"
import ton150 from "/ton150.png"

function Presscap() {
  const [presscap, setpresscap] = useState(false);
  const handlepresscapclick = () => {
    setpresscap(!presscap);
    console.log(presscap);
  };

  const [image, setimage] = useRecoilState(imageState);
  return (
    <>
      <div
        onClick={handlepresscapclick}
        className="flex justify-between border-2 border-b-4 mb-4"
      >
        <div>
          <h1 className="text-2xl mt-1 ml-2">Press Capacity(Ton.)</h1>
          <p className="text-xs ml-2 mb-2">none</p>
        </div>
        <div className="mr-2 mt-1">selected item</div>
      </div>
      {presscap && (
        <div className="flex gap-6 mb-4 ">
          <div className="flex gap-2">
            <img
              src={ton45}
              alt=""
              className="border-2 border-solid  h-20 w-20"
            />
            <img
              src={ton150}
              alt=""
              className="border-2 border-solid  h-20 w-20"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Presscap;
