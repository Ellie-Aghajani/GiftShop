const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/giftshop')
    .then(() => console.log("connected to mongodb ..."))
    .catch(err => console.log(err.message));
    