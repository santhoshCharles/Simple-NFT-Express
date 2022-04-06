const jwt = require("jsonwebtoken");
require("dotenv").config();

let refreshTokens = [];

const newToken = (payload) => {
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  return { token, refreshToken };
};

const verifyToken = (token) => {
  if (token == null) return res.sendStatus(401);
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    return user;
  });
};

const validateRefreshToken = (refreshToken) => {
  if (refreshToken === null) return null;
  if (!refreshTokens.includes(refreshToken)) return null;
  return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = newToken({ email: user.email, type: user.type });
    return accessToken;
  });
};

module.exports = {
  newToken,
  verifyToken,
  validateRefreshToken,
};
