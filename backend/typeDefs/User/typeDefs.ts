import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
  }
  
  input registerInput {
    fullName: String!
    email: String!
    password: String!
  }
  input loginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }
  type Mutation {
    register(input: registerInput): Boolean
    login(input: loginInput): AuthPayload
  }
  type Query {
    users: [User]!
  }
`;