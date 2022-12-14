import mongoose from "mongoose";

// Utility function to connect to database
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected :  ${conn.connection.host}`.cyan.underline);

    }catch(err){
        console.log(`Error : ${err.message}`.red.underline.bold);
    }
}

export default connectDB;