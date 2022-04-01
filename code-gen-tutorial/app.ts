import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from '@graphql-tools/schema';
import jwt from "jsonwebtoken"  
import { typeDefs } from "./typeDefs";
import { resolvers } from "./controllers";
import { DB } from "./config/database";


const { JWT_SECRET } = process.env
const getUser = (token:any) => {
  let yp = ''
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET as string)
    }
    return null
  } catch (error) {
    return null
  }
}

const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req }) => {
    const token = req.get('Authorization') || ''
    return { user: getUser(token.replace('Bearer', '')) }
  },
});

(async () => {
  await DB()
  const { url } = await server.listen();

  console.log(`Server ready at ${url}`);
})();