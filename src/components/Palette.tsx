import { memo } from "react";
import Color from "./Color";
import CustomPrompt from "./Customprompt";
const Palette = ({ palette }:{palette: string}) => {

    const arr = palette.split("\n");
    console.log(palette);


  return (
    <div> 
      
      <div className="flex flex-col gap-4 ">
      {arr?.map((item: string) => {
        if(item === "") return ;
        const colors = item.split(" ");
        return(

          <div className=" flex ">
          {colors.map((color: string, index) => {
            if (color === "") return;
              return (
                <>
              <Color color={color} index={index} />
                { index === 5 && <CustomPrompt palette={colors} /> }
                </>
              )
            
          })}
        </div>
        )
      })}
      </div>
    </div>

  )
}

export default memo(Palette)