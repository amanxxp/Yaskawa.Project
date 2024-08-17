import Model from "./Model";
import image1 from "/models/yaskawapng.png";
import { MdCloudUpload } from "react-icons/md";

const App = () => {
  return (
    <>
      <div className="text-[40px] ">
        <img src={image1} alt="" className="mt-6 ml-8 mb-6 h-[40px]" />
      </div>
      <div className="text-[50px] text-center font-bold ">SELECT YOUR MODEL</div>
      <div className="flex ml-8 mt-4">
        <div className="text-[30px] font-semibold w-1/3 text-center">
      
        <form action="" className="flex flex-col justify-center mt-14 ml-2 items-center border-[2px] border-dashed border-[#1475cf] h-[300px] w-[500px] cursor-pointer rounded-[5px]" onClick={()=>document.querySelector(".input-field").click()}>
          <input type="file" className="input-field ml-[290px] " hidden/>
          <MdCloudUpload color="#1475cf" size={120}/>
          <div className="text-3xl ">Upload File</div>
        </form>

        </div>
        {/* <div className="h-[580px] bg-black w-[2px] ml-10"></div> */}
      </div>
    </>
  );
};

export default App;
