import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "Mern-Events-Plan" })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to the database", err);
    });
};
