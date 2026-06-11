import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://contest12006:qwertyuiop001@cluster0.fgi5m2r.mongodb.net/food-del`).then(()=>console.log("DB connectd"));
}