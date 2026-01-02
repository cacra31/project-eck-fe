import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import QueryProvider from './providers/QueryProvider.tsx'
import App from './App.tsx'
import "@/shared/styles/global.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ChakraProvider>
  </StrictMode>
)
