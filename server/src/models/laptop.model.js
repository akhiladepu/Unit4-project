const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    productImages: { type: Object, required: true },
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    yearOfPurchase: { type: Number, required: true },
    model: { type: String, required: true },
    physicalCondition: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    postedOn: { type: String, required: true },
    featured: { type: Boolean},
    wishlisted: { type: Boolean},
    sellerId: { type: String},
}, {
    versionKey: false,
    timestamps: true
});

const Laptop = mongoose.model('laptop', laptopSchema);

module.exports = Laptop;