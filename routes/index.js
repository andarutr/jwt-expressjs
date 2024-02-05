const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');
const UserController = require('../controllers/user');

router.post('/register', UserController.create);
router.get('/products', ProductController.readAll);
router.get('/products/:id', ProductController.readOne);
router.post('/products', ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

module.exports = router;