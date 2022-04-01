import mongoose from "mongoose";

require("dotenv").config()
export const DB = async () => {

    const connection = await mongoose.connect(process.env.MONGODB_URI as string).then(() => {
        console.log('**** db connected ****');
    }).catch((err) => {
        console.log(err);
    })

    return connection
}