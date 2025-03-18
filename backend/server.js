
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const User = require('./models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose');

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 't7913fjiwca19niauh2edh02r23909r'
// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());


mongoose.connect('mongodb+srv://obsidiancreeper123:1KIjuAXmdKx80ba7@cluster0.sfl4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
// Routes
app.get('/', (req, res) => {
  res.json({ message: "Server is running!" });
});

app.post('/api/register', async (req, res) => {
  console.log("📌 Dữ liệu nhận từ frontend:", req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Vui lòng nhập đầy đủ thông tin!" });
  }
  const userDoc = await User.create({
    username,
    email,
    password:bcrypt.hashSync(password, bcryptSalt),
  })

  res.json({ userDoc });
});

app.post('/api/login', async (req,res) => {
  const {email, password} = req.body;
  const userDoc = await User.findOne({email});
  if (userDoc) {
    const pass0K = bcrypt.compareSync(password, userDoc.password);
    if (pass0k) {
      jwt.sign({email:userDoc.email, id:userDoc. id}, jwtSecret, {}, (err, token) => 
      {if (err) throw err;
      res.cookie('token', '').json('pass ok')} )} 
      else {
        res.status(422).json('pass not ok')
      }
    } else {
    res.json('not found')
  }
})
//1KIjuAXmdKx80ba7
// Lắng nghe cổng
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
