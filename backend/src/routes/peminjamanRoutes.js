const router = require('express').Router();
const { getAll, create, updateStatus, remove } = require('../controllers/peminjamanController');

router.route('/').get(getAll).post(create);
router.patch('/:id/kembalikan', updateStatus);
router.delete('/:id', remove);

module.exports = router;