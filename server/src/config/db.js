const mongoose = require('mongoose');

const connectDB = async () => {
  let DB_URL = process.env.DB_URL_STAGING;
  if (process.env === 'production') {
    DB_URL = process.env.DB_URL_PROD;
  }
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected.`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
