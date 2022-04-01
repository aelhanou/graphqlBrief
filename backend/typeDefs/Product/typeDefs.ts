import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: String!
  }
  type Query {
    Products: [Product]!
  }
`;