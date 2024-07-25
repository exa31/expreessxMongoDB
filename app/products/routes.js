
const router = require('express').Router();
const controllerProducts = require('./controller');

router.get("/products", controllerProducts.index);

router.post("/products", controllerProducts.store);

router.put("/product/:id", controllerProducts.update);

router.get("/products/search", controllerProducts.search);

router.delete("/products/api/:id", controllerProducts.destroy);

module.exports = router;