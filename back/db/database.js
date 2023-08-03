const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((data) => {
      console.log(`mongod connectd with server : ${data.connection.host}`);
    })
    .catch((err)=>console.log(err.message))
};

module.exports = connectDataBase;
