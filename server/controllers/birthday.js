const Birthday = require('../db/models/birthday');

// get a birthday
const getBirthday = async (req, res) => {
  try {
    const birthdays = await Birthday.find();
    res.json(birthdays);
  } catch (err) {
    console.log(err.toString());
  }
};

// make a birthday

const makeBirthday = async (req, res) => {
  try {
    const birthday = new Birthday(req.body);
    const response = await birthday.save();
    res.json(response);
  } catch (err) {
    console.log(err.toString());
  }
};

// get a single birthday

const getSingleBirthday = async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    res.json(birthday);
  } catch (err) {
    console.log(err.toString());
  }
};

// update a birthday

const updateBirthday = async (req, res) => {
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
};

// Delete a birthday

const deleteBirthday = async (req, res) => {
  try {
    await Birthday.findByIdAndDelete(req.params.id);
    res.json('birthday deleted');
  } catch (err) {
    console.log(err.toString());
  }
};

module.exports = {
  deleteBirthday,
  makeBirthday,
  updateBirthday,
  getSingleBirthday,
  getBirthday
};
