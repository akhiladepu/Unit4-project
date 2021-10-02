const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
<<<<<<< HEAD
   productLocalId: { type: String},
=======
    productLocalId: { type: String},
>>>>>>> 054c0b62f9c0303e3e8c51e06a23e90f4a0390d7
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
<<<<<<< HEAD

=======
>>>>>>> 054c0b62f9c0303e3e8c51e06a23e90f4a0390d7
}, {
    versionKey: false,
    timestamps: true
});

const Car = mongoose.model('car', carSchema);

module.exports = Car;