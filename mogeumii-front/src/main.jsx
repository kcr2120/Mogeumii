import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 💡 이거 꼭 있어야 해!
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* 💡 App을 BrowserRouter로 감싸주는 게 핵심! */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)