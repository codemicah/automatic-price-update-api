const express = require("express"),
            item = require("./config/database"),
            config = require("./config/config")();

            
app = express();
app.get("/", (req, res)=>{
    res.send("Welcome. \n Go to  <code>/v1/items</code>  to view items")
})

//We get all the items and there prices from the database and send back
setInterval(() => {
    app.get("/v1/items", (req, res) => {
        console.log("route reached")
        item.find({}, (err, items) => {
            if (err) {
                res.status(503).json({
                    status: "Fail",
                    message: "Error establishing database connection"
                })
            } else {
                res.status(200).json({
                    status: "success",
                    data: items
                })
            }
        })
    })
 
}, 1000);
app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server running >>>")
})