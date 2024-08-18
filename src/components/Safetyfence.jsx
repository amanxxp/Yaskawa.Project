import React, { useState } from "react";
import { useRecoilState } from "recoil";
import imageState from "../atoms/bomb";
import notuse from "/notuse.jpg"
import fence from "/fence.png"
function Safetyfence({ onClick }) {
  const [safety, setsafety] = useState(false);
  const handlesafetyfence = () => {
    setsafety(!safety);
    console.log(safety);
  };

  const [image,setimage] = useRecoilState(imageState);
  return (
    <>
      <div
        onClick={handlesafetyfence}
        className="flex justify-between border-2 border-b-4 mb-4 "
      >
        <div>
          <h1 className="text-3xl mt-1 ml-2">Safety Fence</h1>
          <p className="text ml-2 mb-2">Safety Fence</p>
        </div>
        <div className="mr-2 mt-1">Selected item</div>
      </div>
      {safety && (
        <div className="flex gap-6 mb-4">
          <div className=" ml-4" >
            <div className="flex gap-2">
            <img src={notuse} alt=""  className="border-2 border-solid  h-20 w-20" onClick={()=> setimage('https://res.cloudinary.com/doxxr74uv/image/upload/v1723965277/yaskawa/bstvxiiaqjkrncnctknt.jpg')}/>
            <img src={fence} alt="" className="border-2 border-solid  h-20 w-20" onClick={()=> setimage('https://res.cloudinary.com/doxxr74uv/image/upload/v1723965301/yaskawa/cwnbc3ekpktaaz8scqye.jpg')} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Safetyfence;
