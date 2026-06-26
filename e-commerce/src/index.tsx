import { createRoot } from 'react-dom/client'
import './index.css'
// Supports weights 200-900
import '@fontsource-variable/nunito-sans/wght.css';
// @ts-ignore
import App from './App.jsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
