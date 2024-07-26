const router = require('express').Router();
// const multer = require('multer');
// const path = require('path');
// const upload = multer({ dest: path.join(__dirname, '../../uploads') });
const mongoController = require('./controller');

router.get('/products', mongoController.index);
router.get('/product/:id', mongoController.view);
// router.post('/product', upload.single('image'), mongoController.store);
// router.put('/product/:id', upload.single('image'), mongoController.update);
router.delete('/product/:id', mongoController.destroy);
router.delete('/products', mongoController.destroyAll);
// db.collection('products').find().toArray({}).then((result) => {
//     res.send(result);
// }).catch((error) => {    GINI JUGA BISA
//     res.status(500).json({ error: error });
// });



module.exports = router;