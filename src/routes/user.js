const { Router } = require('express');
const router = Router();
const userSchema = require('../models/user');

router.get('/', (req, res) => {
  res.send('lo mismo pero de manera mas organizada');
});

router.post('/api/post', (req, res) => {
  const user = userSchema(req.body);
  console.log(user);

  res.json(user);
});

module.exports = router;
