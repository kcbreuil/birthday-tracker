const router = require('express').Router();
// const Birthday = require('../db/models/birthday');
const {
  getBirthday,
  makeBirthday,
  getSingleBirthday,
  deleteBirthday,
  updateBirthday
} = require('../controllers/birthday');

router.get('/', getBirthday);

router.post('/', makeBirthday);

router.get('/:id', getSingleBirthday);

router.put('/:id', updateBirthday);

router.delete('/:id', deleteBirthday);

module.exports = router;
