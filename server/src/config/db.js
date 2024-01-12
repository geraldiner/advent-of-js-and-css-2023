const mongoose = require('mongoose');

const { getDbUrl } = require('../utils/utils');

const connectDB = async () => {
  const DB_URL = getDbUrl();
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected.`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
