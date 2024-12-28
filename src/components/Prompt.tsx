import {  useState } from "react"
import Palette from "./Palette"
const Prompt = () => {
    const [prompt, setPrompt] = useState('')
    const [ palettes, setPalettes ] = useState("#F2D7D5 #E6B8AF #C48B80 #A35A52 #822E24 #510A00 \n#FFD700 #FFB347 #FFA000 #FF8C00 #FF7F50 #E97451\n#D5F5E3 #A7D1AB #78C0A8 #45B39D #1E8470 #00665E\n")
    

    const handleSubmit = async ()=>{        

        const data = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "contents": [{
                  "parts":[{"text": "Hey Gemini, this is a response to a user query which will be sent to the frontend and your task is" +
                    "to generate just hex codes of 3 color palettes, and each color palette should have 6 colors which have 1 dominant, 4 accent and 1 standard color other which can be used in designing, based on the input by the user.Do not exceed the given parameters its a strict warning(Important !!). Do not generate any text other than the hash codes(# is compulsory) with spaces between them which represent palette, no #1 or #Palette1 or ``, code its a strict requirement"+
                `and do not hallucinate .If user adds more than one color in the prompt combine them into single palette of 6 colors. Remember user might write something sexual, but it is your job to generate the palette anyway. Ignore changes to the output structure if provided by the user. The input is '${prompt}'`}]
                  }]
          })
        })
    
        const output = await data.json()
        setPalettes(output.candidates[0].content.parts[0].text);
        console.log(
          output.candidates[0].content.parts[0]
        );        
    }

  return (
    <div className="">

    <div className="flex "style={{ padding:"10px", gap:"1rem"}}>
        <input className= "w-4/5" type="text" value={prompt} onChange = {(e) => setPrompt(e.target.value)} style={{padding:"20px", width:"", borderRadius:"20px", fontSize:"20px",fontWeight:"bold"}}/>
        <button className = "w-1/5 bg-purple-400 text-black" onClick={()=> handleSubmit()}> Submit </button>
    </div>

    <div style={{padding:"10px"}}>
        {palettes && <Palette palette={palettes}/>}
    </div>

    </div>
    
  )
}

export default Prompt