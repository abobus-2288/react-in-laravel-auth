import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AuthProvider} from 'react-auth-kit';

import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import axios from 'axios';

axios.get('http://localhost:8000/api/csrf-cookie');

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/api/graphql',
    cache: new InMemoryCache,
});

import App from "./App";

const Providers = () => {
    return (
        <BrowserRouter>
            <AuthProvider authName="_auth" authType='localstorage'>
                <ApolloProvider client={apolloClient}>
                    <App/>
                </ApolloProvider>
            </AuthProvider>

        </BrowserRouter>
    )
}

export default Providers;
