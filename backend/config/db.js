import mongoose from "mongoose";
export const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://iamsudarshan04_db_user:Wz2egt3QQkBBfLYh@cluster0.cwmj51y.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected successfully");
    } 
    catch (err) {
        console.log("MongoDB connection error:", err);
        process.exit(1);
        }
};


