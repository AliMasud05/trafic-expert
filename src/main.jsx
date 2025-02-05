import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={routes} /> 
  </StrictMode>,
)
