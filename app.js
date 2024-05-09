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

const Gift = mongoose.model('Gift', giftSchema);

async function createGift(){
    try{
        const gift = new Gift({
            name: "Mother's day box",
            category: ['women'],
            description: 'Bring joy to your mother with this box',
            imageURL:String,
            tags:["Mother's day"]
        });
        const result = await gift.save();
        console.log(result);

    }
    catch(err){err => console.log('Erorr creating gift: ', err.message)};

};
// createGift();
async function getGifts(){
    return await Gift.find();

}

async function run(){
    const gifts = await getGifts();
    console.log(gifts)
}

run();

async function updateGift(id){
    const gift = await Gift.findByIdAndUpdate({_id: id}, {
        $set: {
            name: "father's day box",
            category: ['men'],
            description: 'Bring joy to your father with this box',
            tags:["father's day"]
        }
    }, {new: true});
    console.log(gift);
};
updateGift("663c13902e0b0763ee3d8aca");
