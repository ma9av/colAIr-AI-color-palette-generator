import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { inject } from '@vercel/analytics'

inject()

createRoot(document.getElementById('root')!).render(
<div className='relative'>
    <Navbar />
    <App />
</div>
)
