import { useState } from "react"
import findComplementOfHex from "./complementColor"

const Color = ({ color , index}:{color: string, index:number}) => {
    const [ hover, setHover ] = useState(false)
    const complement = findComplementOfHex(color)

  return (
    <div  className = "w-1/6 h-20 cursor-pointer text-center" key={index} style={{ backgroundColor: hover ? complement : color, 
        color: color, 
        borderTopLeftRadius: index === 0  ? "20px" :"",
        borderBottomLeftRadius: index === 0  ? "20px" :"",
        borderBottomRightRadius: index === 5  ? "20px" :"",
        borderTopRightRadius: index === 5  ? "20px" :"",
        alignContent: "center",
         }}
         onMouseEnter={()=> setHover(true)} 
         onMouseLeave={()=> setHover(false)} 
         onClick={()=> navigator.clipboard.writeText(color)}
         >
            {color}
        </div>
  )
}

export default Color
