import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Pages/Home/Home';
import Events from './Components/Pages/Events/Events';
import Service from './Components/Pages/Service/Service';
import ContactUs from './Components/Pages/Contact/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/events',
        element: <Events></Events>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },


    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
