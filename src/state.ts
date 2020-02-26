import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    hello: String
  }
`;

export default {
  hello: 'world'
};
