
const router = require('express').Router();
const controllerProducts = require('./controller');

router.get("/products", controllerProducts.index);

router.get("/product/:id", controllerProducts.show);

router.post("/products", controllerProducts.store);

router.put("/product/:id", controllerProducts.update);

router.patch("/product/:id", controllerProducts.update);

router.get("/products/search", controllerProducts.search);

router.delete("/products/api/:id", controllerProducts.destroy);

module.exports = router;