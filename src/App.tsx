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
    <div className='flex flex-col h-screen w-full gap-10 items-center font-mono'>
        <div className='place-content-center pl-10 pr-10 pt-10 '>
          <Hero />
        </div>

        <div className='md:w-1/2'> 
          <Prompt /> 
        </div>

        <div className='absolute bottom-10'>
          Built with ❤️ from <a href="https://portfolio-manav.vercel.app/">ma9av</a>
        </div>

    </div>
    </>
  )
}

export default App
