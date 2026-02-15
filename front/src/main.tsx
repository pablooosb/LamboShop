import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, Router } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './routes/home/HomePage';
import WorkshopPage from './routes/workshop/WorkshopPage';
import ModelsPage from './routes/models/ModelsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import DetailsPage from './routes/details/DetailsPage';
import LoginPage from './routes/login/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, //default path
        element: <Navigate to={'home'} replace />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'workshop',
        element: <WorkshopPage />
      },
      {
        path: 'models',
        element: <ModelsPage />
      },
      {
        path: 'details/:id',
        element: <DetailsPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)