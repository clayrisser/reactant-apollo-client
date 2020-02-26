import ApolloClient from 'apollo-boost';
import React, { FC } from 'react';
import Routes from './routes';
import resolvers from './resolvers';
import state, { typeDefs } from './state';
import withApollo from './withApollo';

export const client = new ApolloClient({
  resolvers,
  typeDefs,
  uri: 'http://localhost:4000/graphql'
});
client.writeData({ data: state });

export interface AppProps {}

const App: FC<AppProps> = (_props: AppProps) => <Routes hello="world" />;

export default withApollo(client)(App);
