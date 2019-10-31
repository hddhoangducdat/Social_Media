const express = require('express');
const tokenValidation = require('../../middlewares/tokenValidation');
const curdRoute = express.Router();

curdRoute.get('/userlist', tokenValidation, (req, res) => {
    res.send(req.user._id)
});

module.exports = curdRoute;