import ApolloClient from 'apollo-client';
import React, { Component, FC } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';

export interface UnknownProps {
  [key: string]: any;
}

export default function withApollo(client: ApolloClient<any>) {
  return (App: FC | typeof Component): FC | typeof Component => {
    return (props: any) => (
      <ApolloProvider client={client}>
        <App {...props} />
      </ApolloProvider>
    );
  };
}
