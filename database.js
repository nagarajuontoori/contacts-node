// const  {MongoClient} = require('mongodb')
require('dotenv').config();
const mongoose = require('mongoose');


const configureDb = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const url = `mongodb+srv://nagarajuontoori:Nagaraju123@cluster0.3v4lnwj.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(url, connectionParams)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = configureDb;