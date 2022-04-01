import { Resolvers } from "../../typesGenerated/graphql";
import { GraphQLUpload } from "graphql-upload"
import { finished } from "stream/promises"

export const resolvers: Resolvers = {
  Upload: GraphQLUpload,

  Mutation: {
    singleUpload: async (_: any, { file }: any) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();

      const out = require('fs').createWriteStream("Images/" + filename);
      stream.pipe(out);
      await finished(out);

      return { filename, mimetype, encoding };
    },
  },
};