import mongoose from "mongoose";


async function connect() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(e) {
    console.error(e);
  }
}

async function disconnect() {
  try{
    console.log("Closing the connection");
    await mongoose.disconnect();
  } catch(e) {
    console.error(e);
  }
}

export {
  connect,
  disconnect
}