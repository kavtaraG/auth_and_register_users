const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './dotenv/config.env'});

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI, {
            // userNewUrlParser: true,
            // useCreateIndex: true
        });
    
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(`Error mongo connection: ${err}`);
    }
    
};

module.exports = connectDB;