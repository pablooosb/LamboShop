import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './routes/home/HomePage';
import WorkshopPage from './routes/workshop/WorkshopPage';
import ModelsPage from './routes/models/ModelsPage';
import DetailsPage from './routes/details/DetailsPage';
import FavoritesPage from './routes/favorites/FavorritesPage';

import LoginPage from './routes/login/LoginPage'; 
import RegisterPage from './routes/register/RegisterPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'

const PublicRoute = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const isAuthenticated = !!localStorage.getItem('userToken');
  
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  
  return <>{children}</>;
};  

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
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
        path: 'favorites',
        element: <FavoritesPage />
      },
      {
        path: 'login',
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        )
      },
      {
        path: 'register',
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        )
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)