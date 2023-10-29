const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");

    // returns jwt payload (virtual card info: id and emai)
    const jwt_payload = jwt.verify(accessToken, process.env.JWT_SALT);

    // create user on req object to access later it users routes
    req.user = jwt_payload;
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized!",
    });
    return;
  }

  next();
};

module.exports = auth;
