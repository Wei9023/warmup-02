'use strict';

const express = require('express');
const router = express.Router();
let db = [];

router.get('/', (req, res) => res.status(200).send('hello!'));

router.post('/save',(req, res) => {
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

module.exports = router;