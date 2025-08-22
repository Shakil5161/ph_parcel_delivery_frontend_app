import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import About from './components/modules/about/About.tsx'
import Contact from './components/modules/contact/Contact.tsx'
import './index.css'
import { ThemeProvider } from './providers/theme.provider.tsx'

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
    <ThemeProvider>
      <RouterProvider router={router}/>
      {/* <App /> */}
    </ThemeProvider>
  </StrictMode>,
)
