// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
import Login from './components/pages/Login.jsx';
// import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Login />,
    children: [
      {
        index: true,
        element: <Login />
      }, {
        path: '/login',
        element: <Login />
      },       //   path: '/signup',
      //   element: <Signup />
      // }, {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)