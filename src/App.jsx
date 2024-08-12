import { useState } from "react";
import Log from "./components/Log";
import Robot from "./components/Robot";
import image1 from "/models/yaskawapng.png"
// import Devansh from "./components/Devansh";

const App = () => {
  const [Points, setPoints] = useState([]);
  return (
    <>
    <div className="text-[40px]  font-semibold m-0">
      <img src={image1} alt="" className="mt-6 ml-8 mb-6 h-[40px]"  />
    </div>
    <div className="flex gap-0 p-0 overflow-hidden mr-6">
      <div className="w-3/4 text-3xl mt-5 ml-10 border-2 h-full border-solid border-black rounded overflow-hidden">
      <div className="text-[40px] text-center font-semibold">YOUR MODEL
      <div className='h-[1.5px] bg-black mb-2 '></div>
      </div>
      
        <Robot setPoints={setPoints}/>
      </div>
      <div className="text-3xl w-1/4 m-10 border-2 h-full border-solid border-black rounded overflow-hidden">
      <Log Points={Points}/>
      </div>
    </div>
    
    </>
  );
};

export default App;
