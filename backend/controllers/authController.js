const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: 'Please enter all fields' });

  try {
    const [user] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length > 0)
      return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [
      name,
      email,
      hashedPassword
    ]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Please enter all fields' });

  try {
    const [user] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length === 0)
      return res.status(400).json({ message: 'Invalid credentials' });

    const validPass = await bcrypt.compare(password, user[0].password);
    if (!validPass)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({
      token,
      user: {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
