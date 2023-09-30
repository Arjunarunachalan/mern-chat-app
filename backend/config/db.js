const mongoose = require("mongoose");
// const mongoURI = process.env.MONGO_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://arjun:Arju%403695@cluster0.dxbnhyq.mongodb.net/MERNCHATAPP?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
