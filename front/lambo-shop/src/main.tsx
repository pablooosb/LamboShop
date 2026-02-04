import { StrictMode } from 'react'
import { RouterProvider } from 'react-router/dom'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, Router } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './routes/HomePage';
import WorkshopPage from './routes/WorkshopPage';
import './index.css'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,       // Esto indica que es la ruta por defecto dentro de RootLayout
        element: <Navigate to={'home'} replace />,
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'workshop',
        element: <WorkshopPage />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
