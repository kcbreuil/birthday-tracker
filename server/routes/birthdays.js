const router = require('express').Router();
const Birthday = require('../db/models/birthday');

router.get('/birthdays', async (req, res) => {
  try {
    const birthdays = await Birthday.find();
    res.json(birthdays);
  } catch (err) {
    console.log(err.toString());
  }
});

router.post('/birthdays', async (req, res) => {
  try {
    const birthday = new Birthday(req.body);
    const response = await birthday.save();
    res.json(response);
  } catch (err) {
    console.log(err.toString());
  }
});

router.get('/birthdays/:id', async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    res.json(birthday);
  } catch (err) {
    console.log(err.toString());
  }
});

router.put('/birthdays/:id', async (req, res) => {
  try {
    const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    await birthday.save();
    res.json(birthday);
  } catch (err) {
    console.log('Error: ' + err);
  }
});

router.delete('/birthdays/:id', async (req, res) => {
  try {
    await Birthday.findByIdAndDelete(req.params.id);
    res.json('birthday deleted');
  } catch (err) {
    console.log(err.toString());
  }
});

module.exports = router;
