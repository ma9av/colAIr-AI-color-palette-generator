import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
<div className='relative'>
    <Navbar />
    <App />
</div>
)
