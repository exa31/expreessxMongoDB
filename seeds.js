const mongoose = require('mongoose');
const Product = require('./models/products/products');


mongoose.connect('mongodb+srv://exa:exa@atlascluster.gi4j8dv.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

// const seedProducts = [
//     {
//         name: 'iPhone 12',
//         price: 799,
//         description: 'A brand new iPhone',
//         color: 'Black'
//     },
//     {
//         name: 'MacBook Pro',
//         price: 1299,
//         description: 'A brand new MacBook',
//         color: 'Silver'
//     },
//     {
//         name: 'Apple Watch',
//         price: 399,
//         description: 'A brand new Apple Watch',
//         color: 'White'
//     },
//     {
//         name: 'iPad Pro',
//         price: 999,
//         description: 'A brand new iPad',
//         color: 'Black'
//     },
//     {
//         name: 'AirPods Pro',
//         price: 249,
//         description: 'A brand new AirPods',
//         color: 'White'
//     },
//     {
//         name: 'iMac',
//         price: 1799,
//         description: 'A brand new iMac',
//         color: 'Silver'
//     },
//     {
//         name: 'Mac Mini',
//         price: 699,
//         description: 'A brand new Mac Mini',
//         color: 'Silver'
//     },
//     {
//         name: 'HomePod',
//         price: 299,
//         description: 'A brand new HomePod',
//         color: 'White'
//     },
//     {
//         name: 'Apple TV',
//         price: 149,
//         description: 'A brand new Apple TV',
//         color: 'Black'
//     },
//     {
//         name: 'Beats Studio',
//         price: 349,
//         description: 'A brand new Beats Studio',
//         color: 'White'
//     },
// ];



const api = async () => {
    try {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        Product.insertMany(products).then(() => {
            console.log('Products added');
        }).catch((err) => {
            console.log('Failed to add products', err);
        });
    } catch (error) {
        console.log(error.message);
    }
}

api();


