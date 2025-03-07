import mongoose from "mongoose";


export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI , {
      dbName: "MERN_AUTH",
    })
    .then(() => {
      console.log("Mongo db conneced");
    })
    .catch((err) => {
      console.log(`Mong db error ${err}`);
    });
};
