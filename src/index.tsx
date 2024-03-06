import '@/assets/styles/index.scss'
import { StrictMode } from 'react';
import App from './App'
import 'antd'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

