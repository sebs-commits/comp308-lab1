const jwt = require("jsonwebtoken");
require("dotenv").config();

const authVerification = async (req, res, next) => {
  // get token from header first
  const token = req.header("Authorization");

  // check if no token
  if (!token) {
    console.log("No token, authorization denied");
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.student = decoded.student;
    next();
  } catch (err) {
    console.log("Token is not valid");
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = {
    authVerification,
}