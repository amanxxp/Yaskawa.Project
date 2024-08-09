import Robot from "./components/Robot";

const App = () => {
  return (
    <div className="flex gap-0 p-0 overflow-hidden">
      <div className="w-3/4 text-3xl m-10 border-2 h-full border-solid border-black rounded overflow-hidden">
      YOUR MODEL
        <Robot/>
      </div>
      <div className="text-3xl w-1/4 m-10 border-2 h-full border-solid border-black rounded overflow-hidden">Hello world</div>
    </div>
  );
};

export default App;
