const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { type: String},
    last_name: { type: String},
    email: { type: String},
    password: { type: String},
    mobile: { type: Number, required: true },
    image: "https://statics.olx.in/external/base/img/avatar_1.png",
    wishlist: {type: Object}
}, {
    versionKey: false,
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;