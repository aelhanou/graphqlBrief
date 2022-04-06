import express from "express"
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from "./typeDefs";
import { resolvers } from "./controllers";
import { DB } from "./config/database";
import { graphqlUploadExpress } from "graphql-upload";
import { getUser } from "./middleware/auth";

const app = express();


const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req }) => {
    const token = req.get('Authorization') || ''    
    return { user: getUser(token.replace('Bearer', '')) }
  },
});

(async () => {
  await DB()
  await server.start();

  app.use(graphqlUploadExpress())
  server.applyMiddleware({ app })

  await new Promise<void>(r => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  // const { url } = await server.listen();

  // console.log(`Server ready at ${url}`);
})();