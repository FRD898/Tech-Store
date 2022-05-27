const express = require('express');
const router = express.Router();
const techController = require('../controllers/index')

router.post('/login', techController.newLogin);
router.get('/', techController.newHome);
router.get('/products',techController.getProducts);
router.post('/delete',techController.removeProduct);
router.post('/add',techController.addProduct);
//router.delete('/remove',techController.getElements);

module.exports = router