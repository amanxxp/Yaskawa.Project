import React, { useState } from "react";
import { useRecoilState } from "recoil";
import imageState from "../atoms/bomb";

function PressMachine() {
  const [pressmch, setpressmch] = useState(false);
  const handlepressmachineclick = () => {
    setpressmch(!pressmch);
    console.log(pressmch);
  };
  const [image, setimage] = useRecoilState(imageState);

  return (
    <>
      <div
        onClick={handlepressmachineclick}
        className="flex justify-between border-2 border-b-4 mb-4"
      >
        <div>
          <h1 className="text-2xl  mt-1 ml-2">Press Machine</h1>
          <p className="text-xs ml-2 mb-2">Tandem Line {"3"}</p>
        </div>
        <div className="mr-2 mt-1">selected item</div>
      </div>
      {pressmch && (
        <div className="flex gap-6 mb-4">
          <div
            className="border-2 p-4 pr-6 text-5xl pl-6 font-bold text-[#003F87]"
            onClick={() =>
              setimage(
                "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965138/yaskawa/opm4tzgtqhw7slvs8wle.jpg"
              )
            }
          >
            3
          </div>
          <div
            className="border-2 p-4 pr-6 text-5xl pl-6 font-bold text-[#003F87]"
            onClick={() =>
              setimage(
                "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965162/yaskawa/rplwgjzsqzfzczfpmnuw.jpg"
              )
            }
          >
            4
          </div>
          <div
            className="border-2 p-4 pr-6 text-5xl pl-6 font-bold text-[#003F87]"
            onClick={() =>
              setimage(
                "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965557/yaskawa/f3ez7hoelstfarsuwi1n.jpg"
              )
            }
          >
            5
          </div>
        </div>
      )}
    </>
  );
}

export default PressMachine;
