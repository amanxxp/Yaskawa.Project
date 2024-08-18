import React, { useState } from "react";
import { useRecoilState } from "recoil";
import imageState from "../atoms/bomb";

function Productivity() {
  const [productivity, setproductivity] = useState(false);
  const handleprodctclick = () => {
    setproductivity(!productivity);
    console.log(productivity);
  };
  const [image,setimage] = useRecoilState(imageState);
  return (
    <>
    <div onClick={handleprodctclick} className="flex justify-between border-2 border-b-4 mb-4"
      >
    <div>
        <h1 className="text-2xl mt-1 ml-2">Productivity (Output)</h1>
        <p className="text-xs ml-2 mb-2">Choose an option</p>
      </div>
      <div className="mr-2 mt-1">
        selected item 
      </div>
    </div>
    {
      productivity && 
      <div className="flex gap-2 mb-4 items-center ">
          <div className="border-2  p-2 py-8  text-[#4478A5] text-xl font-bold" onClick={()=> setimage('https://res.cloudinary.com/doxxr74uv/image/upload/v1723965230/yaskawa/veou03rq5awvgma2xryd.jpg')}>9 Pcs/min</div>
          <div className="border-2  p-2 py-8  text-[#4478A5] text-xl font-bold" onClick={()=> setimage('https://res.cloudinary.com/doxxr74uv/image/upload/v1723965230/yaskawa/veou03rq5awvgma2xryd.jpg')}>
            10 Pcs/min
          </div>
          <div className="border-2  p-2 py-8  text-[#4478A5] text-xl font-bold" onClick={()=> setimage('https://res.cloudinary.com/doxxr74uv/image/upload/v1723965256/yaskawa/lqkgnp5uio7r7o0fzpph.jpg')}>11 Pcs/min</div>
          <div className="border-2  p-2 py-8  text-[#4478A5] text-xl font-bold" onClick={()=> setimage('https://res.cloudinary.com/doxxr74uv/image/upload/v1723965256/yaskawa/lqkgnp5uio7r7o0fzpph.jpg')}>12 Pcs/min</div>
          </div>
    }</>
  )
}

export default Productivity;
