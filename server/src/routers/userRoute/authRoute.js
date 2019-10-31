const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/userModel');
const { registerValidation, loginValidation } = require('../../middlewares/authValidation');
const authRoute = express.Router();

authRoute.post('/register', async (req, res) => {
    const { error } = await registerValidation(req.body);

    if (error) {
       return res.status(400).send(error.details[0].message);
    }

    let emailExist = await userModel.findOne({ email: req.body.email });
    if (emailExist)
        return res.status(400).send("Email already exists !");

    let salt = await bcrypt.genSalt(10);
    let passwordHash = await bcrypt.hash(req.body.password, salt);

    const model = new userModel({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: passwordHash
    });

    try {
        const savedRegisterModel = await model.save();
        res.send(savedRegisterModel);
    }
    catch (err) {
        res.status(400).send(err);
    }
});


authRoute.post('/login', async (req, res) => {
    const { error } = await loginValidation(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
    }

    let user = await userModel.findOne({ email: req.body.email });

    if (!user)
        return res.status(400).send("Account does not exist ! ");

    let validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword)
        return res.status(400).send("Password invalid ! Please try again");

    const token = jwt.sign({_id: user.id}, process.env.SECRET_TOKEN);
    res.header('auth-token', token);

    res.send(' Login sucessfully ! ');
});

module.exports = authRoute;
