import { useState } from "react";

type ObjWithArray ={
    [key: string]: string[]
}

const Library = ({ palettesObj, setToggle}:{palettesObj:ObjWithArray , setToggle:React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [k, setK] = useState(0);

  return (
    <div className="w-full h-full absolute right-0 top-0 z-10 flex" style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
      <div className="w-2/3 " onClick={()=> setToggle(false)}></div>

    <div className="p-5 absolute right-0 top-0 z-10 h-full w-1/3 font-mono bg-gray-400 overflow-auto">

       <div className=" flex justify-between text-3xl">
        <span> Library </span>
        <span className = "cursor-pointer" onClick={() => setToggle(false)}> X </span>

        </div>
         
        <div className="pt-5">
        {
            Object.keys(palettesObj).map((key) => {
                return (
                    <div className="">
              <span className=""> {key}{" "} <span className="cursor-pointer" onClick={()=>{
                  delete palettesObj[key]
                  localStorage.setItem('palettes', JSON.stringify(palettesObj))
                  setK(k+1)
                  
                }}> 🗑️ </span></span>
              <div className="flex p-3">
                {
                    palettesObj[key].map((color: string) => {
                        if(color === "") return
                        return <div className="w-1/6" style={{backgroundColor:color}}> {color} </div>
                        
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
