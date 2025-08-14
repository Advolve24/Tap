const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // normalize shape so controllers can use either id or _id
    req.user = { id: payload.id, _id: payload.id, email: payload.email };
    return next();
  } catch (err) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
};
