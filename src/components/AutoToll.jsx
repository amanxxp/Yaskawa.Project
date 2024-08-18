import React, { useState } from "react";
import { useRecoilState } from "recoil";
import imageState from "../atoms/bomb";
import notuse from "/notuse.jpg";
import tool from "/toolchange.png"

function AutoToll({ onClick }) {
  const [autotoll, setAutotoll] = useState(false);
  const handleautotollclick = () => {
    setAutotoll(!autotoll);
    console.log(autotoll);
  };
  const [image, setimage] = useRecoilState(imageState);
  return (
    <>
      <div
        onClick={handleautotollclick}
        className="flex justify-between border-2 border-b-4 mb-4"
      >
        <div>
          <h1 className="text-2xl mt-1 ml-2">Auto Tool Changer</h1>
          <p className="text-xs ml-2 mb-2">USE</p>
        </div>
        <div className="mr-2 mt-1">selected item</div>
      </div>
      {autotoll && (
        <div className="flex gap-6 mb-4 ">
          <div className="flex gap-2">
            <img
              src={notuse}
              className="border-2 border-solid  h-20 w-20"
              onClick={() =>
                setimage(
                  "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965256/yaskawa/lqkgnp5uio7r7o0fzpph.jpg"
                )
              }
            />
            <img
              src={tool}
              alt=""
              className="border-2 border-solid  h-20 w-20"
              onClick={() =>
                setimage(
                  "https://res.cloudinary.com/doxxr74uv/image/upload/v1723965277/yaskawa/bstvxiiaqjkrncnctknt.jpg"
                )
              }
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AutoToll;
