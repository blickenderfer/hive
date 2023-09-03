// import { useState } from 'react'
// import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Outlet } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context';
import './App.css'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  console.log("did i get token", token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      mode: "no-cors",
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  //uri: 'http://127.0.0.1:3001/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
}

export default App;