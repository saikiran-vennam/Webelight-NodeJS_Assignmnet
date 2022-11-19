const express = require('express');
const app = express();


// Import routes
const blogRoute = require('./routes/main');


//Router MIddlewares
app.use(express.json());
app.use('/', blogRoute);

var jwt = require('jsonwebtoken');
const secret = "RESTAPI";


app.use("/order", async (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split("test ")[1];
        jwt.verify(token, secret, async function(err, decoded) {
            if (err) {
                return res.status(400).json({
                    status: "Failed",
                    message: "User Not Authenticated"
                })
            }
            const user = await User.findOne({_id: decoded.data});
            req.user = user._id;
            next();
          });

    }
    else {
       return  res.status(400).json({
            status: "Failed",
            message: "Invalid token"
        })
    }
});

module.exports = app;
