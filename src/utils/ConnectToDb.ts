const mongoose = require("mongoose");
const ConnectToDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URL);
        console.log('connected successfully ✔')
    }
  } catch (error) {
      console.log('Not ❌ connected successfully')
    console.log(error);

  }
};

export default ConnectToDb;
