const mongoose = require('mongoose');

const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 4);

const userSchema = new mongoose.Schema({
    first_name: { type: String, default:"First Name"},
    last_name: { type: String, default:"Last Name"},
    email: { type: String, default:"First Name @email.com"},
    password: { type: String},
    mobile: { type: Number, required: true},
    image: { type: String, default: `https://statics.olx.in/external/base/img/avatar_${rndInt}.png` },
    wishlist: {type: Object}
}, {
    versionKey: false,
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;