import { useState } from "react";

type ObjWithArray ={
    [key: string]: string[]
}

const Library = ({ palettesObj, setToggle}:{palettesObj:ObjWithArray , setToggle:React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [k, setK] = useState(0);

  return (
    <div className="w-screen h-full absolute left-0 top-0 z-10 flex" style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
      <div className="md:w-2/3 w-1/5 min-h-screen" onClick={()=> setToggle(false)}></div>

    <div className="md:w-1/3 w-4/5 font-mono bg-gray-400 overflow-auto">

       <div className=" flex justify-between text-3xl p-5">
        <span> Library </span>
        <span className = "cursor-pointer" onClick={() => setToggle(false)}> X </span>

        </div>
         
        <div className="pt-5">
        {
            Object.keys(palettesObj).map((key) => {
                return (
                    <div className="">
              <span className="p-2">{" "} {key}{" "} <span className="cursor-pointer" onClick={()=>{
                  delete palettesObj[key]
                  localStorage.setItem('palettes', JSON.stringify(palettesObj))
                  setK(k+1)
                  
                }}> 🗑️ </span></span>
              <div className="flex p-3">
                {
                    palettesObj[key].map((color: string) => {
                        if(color === "") return
                        return <div className="w-1/6 text-center text-xs md:text-base p-2" style={{backgroundColor:color}}> {color} </div>
                        
                    })
                }
              </div>
              </div>

)
})
}
          
        </div>
       </div>
</div>
  )
}

export default Library
