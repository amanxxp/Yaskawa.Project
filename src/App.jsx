import Model from "./Model";
import image1 from "/models/yaskawapng.png";
import { MdCloudUpload } from "react-icons/md";
import model1 from "/models/model1.jpg";
import model2 from "/models/model2.jpg";
import model3 from "/models/model3.jpg";
import model4 from "/models/model4.png";
import model5 from "/models/model5.jpg";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ModelState } from "./atoms/atom";
import Nav from "./components/Nav";

const App = () => {
  const [postion, setposition] = useRecoilState(ModelState);
  if (postion) {
    return <Model />;
  }
  return (
    <>
      <div className="text-[40px] font-semibold flex ">
        <img src={image1} alt="" className="mt-6 ml-8 mb-6 h-[40px]" />
        <div
        >
          <Nav/>
        </div>
      </div>
      <div className="text-[50px] text-center font-bold ">
        SELECT YOUR MODEL
      </div>
      <div className="flex ml-8 mt-4 h-[1100px]">
        <div className="text-[30px] font-semibold w-1/3 text-center mt-5">
          <form
            action=""
            className="flex flex-col justify-center mt-14 ml-2 items-center border-[2px] border-dashed border-[#1475cf] h-[300px] w-[500px] cursor-pointer rounded-[5px]"
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input type="file" className="input-field ml-[290px] " hidden />
            <MdCloudUpload color="#1475cf" size={120} />
            <div className="text-3xl ">Upload File</div>
          </form>
        </div>
        <div
          className="ml-20 mt-4"
          onClick={() => {
            setposition(!postion);
          }}
        >
          <div className="text-3xl font-semibold mb-5 ml-2">
            Previously Selected Models
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="border-[2px] border-dashed border-[#1475cf] h-[300px] w-[410px] cursor-pointer rounded-[5px]">
              <div className="h-[250px] w-[400px] cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-75">
                <img src={model4} alt="" />
              </div>
            </div>
            <div className="border-[2px] border-dashed border-[#1475cf] h-[300px] w-[410px] cursor-pointer rounded-[5px]">
              <div className="h-[250px] w-[400px] cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-75">
                <img
                  src={model3}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="border-[2px] border-dashed border-[#1475cf] h-[530px] w-[410px] cursor-pointer rounded-[5px]">
              <div className="h-[250px] w-[400px] transform transition-transform duration-500 ease-in-out hover:scale-75 border-dashed border-[#1475cf]  cursor-pointer">
                <img src={model5} alt="" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" fixed bottom-0  w-full bg-white h-10">
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

export default App;
