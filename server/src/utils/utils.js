const getDbUrl = () => {
  let DB_URL = process.env.DB_URL_STAGING;
  if (process.env === 'production') {
    DB_URL = process.env.DB_URL_PROD;
  }
  return DB_URL;
};

const sendToken = async (user, statusCode, res) => {
  const token = await user.getSignedToken();
  res.status(statusCode);
  res.json({
    token,
    success: true,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

module.exports = { getDbUrl, sendToken };
