const { status } = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
    try {
        let data = req.body;
        if (!await userModel.exists(data)) {
            let savedData = await userModel.create(data);
            res.status(201).send({ msg: savedData });
        }
        else {
            res.status(400).send({ status: 400, msg: "This User already exists" })
        }
    }
    catch (error) {
        res.send({ msg: error.message })
        console.log(error.message)
    }
};

const loginUser = async function (req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(400).send({
                msg: "username or the password is not corerct",
            });

        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "Uranium",
                organisation: "FUnctionUp",
            },
            "functionup-thorium"
        );
        res.setHeader("x-auth-token", token);
        res.status(201).send({ status: 201, data: token });
    }
    catch (error) {
        res.send({ msg: error.message })
        console.log(error.message)
    }
};

const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
            return res.status(404).send({ status: false, msg: "No such user exists" });

        res.status(200).send({ status: true, data: userDetails });
    }
    catch (error) {
        res.send({ msg: error.message })
        console.log(error.message)
    }
};

const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).send("No such user exists");
        }
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
        res.send({ status: updatedUser});
    }
    catch (error) {
        res.send({ msg: error.message })
        console.log(error.message)
    }
};

const deleteUser = async function(req,res,next){
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).send("No such user exists");
        }
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true, upsert: true });
        res.send({ status: updatedUser, data: updatedUser });
    }
    catch (error) {
        res.send({ msg: error.message })
        console.log(error.message)
    }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser