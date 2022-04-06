import { Resolvers,Product } from "../../typesGenerated/graphql";

export const resolvers: Resolvers = {
  Query: {
    Products: () => [
      {
        id: "1",
        name: "Go to the Store",
        price: "200 dh",
      },
      {
        id: "2",
        name: "Clean the House",
        price: "10 dh",
      }
    ],
  },
};