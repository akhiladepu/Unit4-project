const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://teamolx:teamolx@project-olx.3ketr.mongodb.net/projectolx?retryWrites=true&w=majority", {
                useNewUrlParser: true,// <password> => akhil
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            });
}