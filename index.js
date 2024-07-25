require('./config/mongodb'); // Connect to MongoDB ATAU KAYA GINI
const express = require('express');
const app = express();
const override = require('method-override');
const router = require('./app/products/routes');
const path = require('path');



// Connect to MongoDB bisa kaya gini
// mongoose.connect('mongodb://localhost:27017/express-mongo').then(() => {
//     console.log('Connected to MongoDB');
// }).catch((err) => {
//     console.log('Failed to connect to MongoDB', err);
// });

app.use(override('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", router);



app.listen(9090, () => {
    console.log('Server started on http://localhost:9090');
});