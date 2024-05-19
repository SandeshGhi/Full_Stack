// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Authentication required' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const crypto = require('crypto');
    // const secret = crypto.randomBytes(64).toString('hex');
    // console.log(secret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
