import { userModel } from "../../models";
import { MutationRegisterArgs, Resolvers, User } from "../../typesGenerated/graphql";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
require("dotenv").config()


export const resolvers: Resolvers = {
  Query: {
    users: async (_, { }, { user }): Promise<User[]> => {
      if (!user) throw new Error('You are not authenticated')
      return await userModel.find()
    }
  },
  Mutation: {
    register: async (_: any, { input }: MutationRegisterArgs) => {
      const { fullName, email, password }: any = input
      try {
        await userModel.create({
          fullName,
          email,
          password: await bcrypt.hash(password, 10)
        })
        return true

      } catch (error: any) {
        throw new Error(error?.message)
      }

    },
    login: async (_: any, { input }: any) => {
      const { email, password } = input
      try {
        const user = await userModel.findOne({ where: { email } })
        if (!user) {
          throw new Error('No user with that email')
        }
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
          throw new Error('Incorrect password')
        }
        // return jwt
        const token = jsonwebtoken.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET as string,
          { expiresIn: '1d' }
        )
        return {
          token, user
        }
      } catch (error: any) {
        throw new Error(error?.message)
      }
    }
  }
};

