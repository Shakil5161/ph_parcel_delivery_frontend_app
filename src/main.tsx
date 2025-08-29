import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { ThemeProvider } from './providers/theme.provider.tsx'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store.ts'
import { router } from './routes/index.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}> 
      <ThemeProvider defaultTheme='dark'>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
)
