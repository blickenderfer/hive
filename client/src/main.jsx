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
import Signup from './components/pages/Signup';
import Login from './components/pages/Login.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Home from './components/pages/Homepage';
// import ErrorPage from './pages/Error';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import Auth from './utils/auth';
// import Header from './components/Header';
// import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  console.log("did i get token", token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  //link: authLink.concat(httpLink),
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Login />,
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
      }
      //   path: '/profiles/:profileId',
      //   element: <Profile />

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
)