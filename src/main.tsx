import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClientProvider, QueryClient} from 'react-query'
import '../styles/index.css'
import App from './App.tsx'


const queryclient = new QueryClient
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
