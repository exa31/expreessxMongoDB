const { ObjectId } = require('bson');
const db = require('../../config/mongodbNative');
const path = require('path');
const fs = require('fs');


const index = async (req, res) => {
    const products = await db.collection('productsNative').find({}).toArray();
    res.json(products);
}

const view = async (req, res) => {
    const { id } = req.params;
    const product = await db.collection('productsNative').findOne({ _id: new ObjectId(id) });
    res.json(product);
}

const search = async (req, res) => {
    const { q } = req.query;
    const products = await db.collection('productsNative').find({ name: new RegExp(q, 'i') }).toArray();
    res.json(products);
}

const store = async (req, res) => {
    const image = req.file;
    const { name, price, description } = req.body;
    if (image) {
        console.log(image);
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target); // mengganti nilai image.path menjadi target
        const product = await db.collection('productsNative').insertOne({ name, price, description, image: `http://localhost:8080/${image.originalname}` });
        return res.json(product)
    }
    const product = await db.collection('productsNative').insertOne(req.body);
    res.json(product);
}

const update = async (req, res) => {
    const { id } = req.params;
    const image = req.file;
    const { name, price, description } = req.body;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
        const update = await db.collection('productsNative').updateOne({ _id: new ObjectId(id) }, { $set: { name, price, description, image: `http://localhost:8080/${image.originalname}` } }, { new: true });
        return res.json(update)
    }
    const product = await db.collection('productsNative').updateOne({ _id: new ObjectId(id) }, { $set: req.body });
    res.json(product);
}

const destroy = async (req, res) => {
    const { id } = req.params;
    const product = await db.collection('productsNative').deleteOne({ _id: new ObjectId(id) });
    res.json(product);
}

const destroyAll = async (req, res) => {
    const product = await db.collection('productsNative').deleteMany({});
    res.json(product);
}

module.exports = {
    index,
    view,
    store,
    update,
    destroy,
    destroyAll,
    search
}