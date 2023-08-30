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
import Home from './components/pages/Homepage.jsx';
import Review from './components/pages/Review.jsx';
// import Profile from './pages/Profile';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login.jsx';
import Dashboard from './components/pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
       {
        path: '/review',
        element: <Review />
      },
      //   path: '/profiles/:profileId',
      //   element: <Profile />

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)