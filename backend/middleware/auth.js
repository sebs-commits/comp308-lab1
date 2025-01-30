const jwt = require("jsonwebtoken");

const authVerification = async (req, res, next) => {
  // get token from header first
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    console.log("No token, authorization denied");
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log("Token is not valid");
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = {
    authVerification,
}