import mongoose from "mongoose";

let isConnected = false // track the connection

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("MongoDb is already connected!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "SharedPrompts",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log("MongoDb is now connected!");
    } catch (err) {
        console.log("An error has occured! ".concat(err));
    }
}
