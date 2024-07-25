const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/express-mongo').then(() => {
//     console.log('Connected to MongoDB');
// }).catch((err) => {
//     console.log('Failed to connect to MongoDB', err);
// });

mongoose.connect('mongodb+srv://exa:exa@atlascluster.gi4j8dv.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
