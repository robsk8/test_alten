const express = require('express');
const router = express.Router();
const product = require('../services/products');

/* GET Products */
router.route('/').get(async function(req, res, next) {
  try {
    res.json(await product.getProducts());
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

/* GET Product by id */
router.route('/:id').get(async function(req, res, next) {
    try {
      res.json(await product.getProduct(req.params.id));
    } catch (err) {
      console.error(`Error while getting the product `, err.message);
      next(err);
    }
  });

/* DELETE Product by id */
router.route('/:id').delete(async function(req, res, next) {
    try {
      res.json(await product.deleteProduct(req.params.id));
    } catch (err) {
      console.error(`Error while getting the product `, err.message);
      next(err);
    }
  });

/* UPDATE Product by id */
router.route('/:id').patch(async function(req, res, next) {
    try {
      res.json(await product.updateProduct(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating the product `, err.message);
      next(err);
    }
  });

/* POST Product */
router.route('/').post(async function(req, res, next){
    try {
        res.json(await product.createProduct(req.body))
    } catch (err) {
        console.error(`Error while creating the product `, err.message);
        next(err);
    }
})
module.exports = router;