const mongoose = require('mongoose');

module.exports = () => {

    try {

        mongoose.connect(process.env.DB_URL,
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }
        )
        console.log("DB connection eshtablished successfully");

    } catch (error) {

        console.log("Couldn't connect to DB");
        console.log(error);
        
    }

}