import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  // Uniquely identify every record that we fetch.
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Auth Starter</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
