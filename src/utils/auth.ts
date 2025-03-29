const jwt = require('jsonwebtoken');


export const VerifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.log(error)
    return null;
  }
};