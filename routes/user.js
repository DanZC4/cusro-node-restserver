const {Router} = require('express');
const { index, store, update, remove, update2 } = require('../controllers/user.controller');


const router = Router();

router.get('/', index);

router.post('/', store);

router.put('/:id', update );

router.delete('/', remove );

router.patch('/', update2 );

module.exports = router;