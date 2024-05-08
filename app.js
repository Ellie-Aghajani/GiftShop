const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/giftshop')
    .then(() => console.log("connected to mongodb ..."))
    .catch(err => console.log(err.message));

const giftSchema = new mongoose.Schema({
    name: String,
    category: [String],
    description: String,
    imageURL:String,
    tags:[String],
    createdAt:{ type: Date, default: Date. now }

});
