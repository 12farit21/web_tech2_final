const validator = require('validator');

exports.validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }
  next();
};

exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }
  next();
};