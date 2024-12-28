import { useState } from "react";
import Library from "./Library";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const palettes = localStorage.getItem('palettes');
  const palettesObj = JSON.parse(palettes!);
  console.log(palettesObj);
  
  return (
    <>
      {toggle && <Library palettesObj={palettesObj} setToggle={setToggle} />} 
    <div className=" sticky top-0 w-full flex h-20 font-mono justify-between bg-[#242424]">
          <div className="p-5 ">
            <span className="font-bold text-3xl"> col<span className="text-orange-400">AI</span>r </span>
          </div>
          <div className="p-5 cursor-pointer" onClick={() => setToggle(true)}>
            <span className="text-3xl ">☰
      </span>
          </div>

    </div>
    </>
  )
}

export default Navbar
