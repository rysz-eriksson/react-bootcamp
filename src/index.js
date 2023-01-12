import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { client } from './graphql/client';
import App from './app';
// import 'normalize.css/normalize.css';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

module.hot.accept();