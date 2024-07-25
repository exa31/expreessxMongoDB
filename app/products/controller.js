const Product = require('../../models/products/products');


const index = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const show = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
}

const store = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, { $set: req.body }, { runValidators: true, new: true });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
}

const search = async (req, res) => {
    const query = req.query.q;
    try {
        const regex = new RegExp(query, 'i'); // Membuat regex dinamis dengan opsi 'i'
        const product = await Product.find({
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } }
            ]
        }); // Mencari product berdasarkan nama atau deskripsi
        res.json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const destroy = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    index,
    store,
    update,
    destroy,
    search,
    show
}