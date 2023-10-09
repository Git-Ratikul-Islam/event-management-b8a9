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
import Login from './Components/Pages/Users/Login';
import SignUp from './Components/Pages/Users/SignUp';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import ErrorElement from './Components/Pages/ErrorPage/ErrorElement';
import AuthProvider from './Provider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/cards.json')

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
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },

    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
