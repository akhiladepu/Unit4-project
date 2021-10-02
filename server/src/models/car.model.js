const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    productLocalId: { type: String},
    productImages: { type: Object, required: true },
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    yearOfPurchase: { type: String, required: true },
    model: { type: String, required: true },
    physicalCondition: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    postedOn: { type: String, required: true },
    featured: { type: Boolean},
    sellerLocalId: { type: String},
}, {
    versionKey: false,
    timestamps: true
});

const Car = mongoose.model('car', carSchema);

module.exports = Car;