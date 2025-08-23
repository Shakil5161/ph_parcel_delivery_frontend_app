import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import About from './components/modules/about/About.tsx'
import Contact from './components/modules/contact/Contact.tsx'
import './index.css'
import { ThemeProvider } from './providers/theme.provider.tsx'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store.ts'


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/about",
        Component: About
      },
      {
        path: "/contact",
        Component: Contact
      },
    ]
  },
  
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}> 
      <ThemeProvider defaultTheme='dark'>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
)
