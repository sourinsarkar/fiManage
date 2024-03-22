import express from "express";
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"

const jwtPassword = "123456";
const app = express();
app.use(express.json());
const PORT = 3000 || process.env.PORT;

mongoose.connect("mongodb+srv://sourinsarkar:sourin000@cluster0.c18bo5p.mongodb.net/");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },

    password: {
        type: String,
        required: [true, "Password is required."]
    },
}, {timestamps: true})

const User = mongoose.model('Users', userSchema);

app.post("/signup", async function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email: email});

    if(existingUser) {
        return res.status(400).send("Username already exists.");
    }

    const user = new User({
        name: name,
        email: email,
        password: password,
    });

    const token = jwt.sign({email: email}, jwtPassword);
    user.token = token; // Save the token in the user document
    await user.save(); // Save the updated user document

    res.json({
        message: "User created successfully",
        token
    });
})

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email: email});

    if(!existingUser || existingUser.password !== password) {
        return res.status(403).json({message: "Invalid email or password"});
    }

    const token = jwt.sign({email: email}, jwtPassword);

    res.json({
        token
    });
})

app.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
})