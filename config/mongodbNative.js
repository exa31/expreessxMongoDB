const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://exa:exa@atlascluster.gi4j8dv.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';
const client = new MongoClient(url);


(async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
})()    // IIFE (Immediately Invoked Function Expression)

const db = client.db('test'); // connect database name

module.exports = db;