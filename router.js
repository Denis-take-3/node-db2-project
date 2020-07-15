const router = require('express').Router();
const db = require('./connection');

router.get('/', (req, res) => {
  db('cars')
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => res.status(500).json({ Error: err.message }));
});

router.post('/', (req, res) => {
  db('cars')
    .insert(req.body)
    .then((created) => {
      res.status(201).json({ id_created: created });
    })
    .catch((err) => {
      res.status(500).json(`Error:${err.message}`);
    });
});

module.exports = router;
