const router = require('express').Router();
const { getAll, create, remove } = require('../controllers/kunjunganController');

router.route('/').get(getAll).post(create);
router.delete('/:id', remove);

module.exports = router;