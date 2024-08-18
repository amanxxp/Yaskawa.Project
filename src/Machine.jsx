import React from "react";
import imageState from "./atoms/bomb";
import { useState } from "react";
import PressMachine from "./components/PressMachine";
import MaxBankSheet from "./components/MaxBankSheet";
import Productivity from "./components/Productivity";
import AutoToll from "./components/AutoToll";
import Presscap from "./components/Presscap";
import Safetyfence from "./components/Safetyfence";
import { useRecoilState } from "recoil";
import image1 from "/yaskawapng.png";

const Machine = () => {
  const [image, setimage] = useRecoilState(imageState);
  return (
    <>
      <div className="text-[40px] fixed ">
        <img src={image1} alt="" className="ml-8 h-[40px]" />
      </div>
      <div className="text-[50px] text-center font-bold fixed mt-[80px] z-20 ml-[200px] ">
        Configuration For Small Press Line
      </div>
      <div className="flex m-12 ">
        <div className=" mt-20 fixed">
          <img src={image} alt="Display Image" className="" />
        </div>
        <div className="w-2/3 mt-44 "></div>
        <div className="w-1/3 m-4 cursor-pointer mt-32">
          <ul>
            <li>
              <PressMachine />
            </li>
            <li>
              <MaxBankSheet />
            </li>
            <li>
              <Productivity />
            </li>
            <li>
              <AutoToll />
            </li>
            <li>
              <Presscap />
            </li>
            <li>
              <Safetyfence />
            </li>
            <li className="text-white bg-blue-600 h-[40px] w-[135px] ml-[390px] pt-1 border-1 rounded-sm text-center text-xl hover:text-2xl">
              Add to cart
            </li>
          </ul>
        </div>
      </div>

      <div className=" fixed bottom-0 mb-4 w-full">
        <div className="h-[1px] bg-black "></div>
        <div className="flex items-center justify-between">
          <h1 className="ml-6 mt-2 font-semibold">
            © Developed and maintain by Aman Panwar
          </h1>
          <div>
            <a
              href="https://github.com/amanxxp/Yaskawa.Project"
              target="_main"
              className="mr-8 font-bold text-blue-800"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Machine;
