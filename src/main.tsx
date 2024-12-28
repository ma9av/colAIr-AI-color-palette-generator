import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

createRoot(document.getElementById('root')!).render(
<div className='relative'>
    <Analytics />
    <SpeedInsights />
    <Navbar />
    <App />
</div>
)
