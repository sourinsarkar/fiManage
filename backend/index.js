import express from "express";
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import cors from "cors"

const jwtPassword = "123456";
const app = express();
app.use(express.json());
app.use(cors());
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
}, {timestamps: true});

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        trim: true,
    },

    expenseNote: {
        type: String,
        required: true,
        trim: true,
    }
}, [timestamps: true]);

const User = mongoose.model('Users', userSchema);
const Expense = mongooe.model('Expense', expenseSchema);

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
    user.token = token;
    await user.save();

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

app.post("/expenseInfo", async function(req, res) {
    const expenseAmount = req.body.expenseAmount;
    const expenseNote = req.body.expenseNote;

    const expense = new Expense({
        
    })
})

app.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
})