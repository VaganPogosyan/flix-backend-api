const jwt = require("jsonwebtoken");

const jwtManager = (user) => {
  // create a valid virtual card for validating the user with "sign"
  const accessToken = jwt.sign(
    {
      _id: user._id,
      // email: user.email,
    },
    process.env.JWT_SALT
  );
  return accessToken;
};

module.exports = jwtManager;
