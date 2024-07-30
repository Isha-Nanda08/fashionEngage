const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User");
const express = require('express');
const multer = require('multer');
const path = require('path');
const BlogModel = require('../models/Blog');
const router = express.Router();


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Register successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
    }
}



// Handle blog post with file upload

const blog= async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ;

        // Log incoming data for debugging
        console.log('Received Data:', { title, content, image });

        const newBlog = new BlogModel({
            title,
            content,
            image
        });

        await newBlog.save();
        res.status(201).json({
            message: 'Blog written successfully',
            success: true
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

module.exports = {
    register,
    login,blog
}