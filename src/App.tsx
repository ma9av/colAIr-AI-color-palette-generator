import { useEffect } from 'react';
import './App.css'
import Hero from './components/Hero';
import Prompt from './components/Prompt'
const App = () => {

  useEffect(() => {
    if(localStorage.getItem('palettes') === null){
      localStorage.setItem('palettes', JSON.stringify({}))
    }
  },[])

  console.log("rendering");

  return (
    <>
    <div className='flex flex-col h-screen gap-10 items-center font-mono'>
        <div className='place-content-center pt-10'>
          <Hero />
        </div>

        <div className='w-1/2 place-content-center'> 
          <Prompt /> 
        </div>

        <div className='absolute bottom-10'>
          Built with ❤️ from <a href="https://github.com/ma9av">ma9av</a>
        </div>

    </div>
    </>
  )
}

export default App
