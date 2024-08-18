import React from "react";
import { useState } from "react";
import Log from "./components/Log";
import Robot from "./components/Robot";
import image1 from "/models/yaskawapng.png";
import { useRecoilState } from "recoil";
import { ModelState } from "./atoms/atom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import Nav from "./components/Nav";
import Machine from "./Machine";

const Model = () => {
  const [Points, setPoints] = useState([]);
  const [position, setPosition] = useRecoilState(ModelState);
  const [postions, setPostions] = useState(false);
  if (postions) {
    return <>
    <Machine/>
    </>;
  }
  return (
    <>
      <div className=" flex text-[40px] font-semibold m-0">
        <img src={image1} alt="Yaskawa" className="mt-6 ml-8 mb-6 h-[40px]" />
        <div
          onClick={() => {
            setPostions(true);
            const button = document.getElementById("addPointButton");
            if (button) {
              button.remove();
            }
          }}
        >
          <Nav />
        </div>
      </div>
      <div className="flex gap-0 p-0 overflow-hidden mr-6">
        <div className="w-3/4 text-3xl mt-5 ml-10 border-0 h-full border-solid border-black rounded overflow-hidden">
          <div className="flex justify-start items-center">
            <div
              onClick={() => {
                setPosition(!position);
                const button = document.getElementById("addPointButton");
                if (button) {
                  button.remove();
                }
              }}
              className="flex items-center border-[2px] border-solid border-black h-[35px] w-[350px] cursor-pointer rounded-[5px] text-2xl"
            >
              <HiChevronLeft />
              SELECT OTHER MODELS
            </div>

            <div className="text-[40px] text-center font-semibold ml-10 ">
              YOUR MODEL
            </div>
          </div>
          <div className="h-[1.5px] bg-black mb-2 mt-1 "></div>
          <Robot setPoints={setPoints} />
        </div>
        <div className="text-3xl w-1/4 m-10 border-2 h-full border-solid border-black rounded overflow-hidden">
          <Log Points={Points} />
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

export default Model;
