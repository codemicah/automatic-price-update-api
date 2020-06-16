const mongoose = require("mongoose");
module.exports = config = () =>{
        mongoose.connect(
          "mongodb://heroku_9gvwxsnl:imdvp2j1377mhevmarorato7ta@ds349587.mlab.com:49587/heroku_9gvwxsnl",
          {useUnifiedTopology: true, useNewUrlParser: true},
          (err, success) => {
            if (err) {
              console.log("Could not connect database");
            } else {
              console.log("Database connection established");
            }
          }
        );
}