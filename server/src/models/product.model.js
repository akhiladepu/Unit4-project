const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productImages: { type: Object, required: true },
    productName: { type: String, required: true },
    brandName: { type: String, required: true },
    yearOfPurchase: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    postedOn: { type: String, required: true },
    featured: { type: Boolean, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;