import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { login, register } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/debug-user/:email", async (req, res) => {
  const user = await User.findOne({ email: req.params.email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    email: user.email,
    hasPassword: !!user.password,
    passwordLength: user.password?.length,
    startsWithBcrypt: user.password?.startsWith("$2"),
  });
});

router.get("/debug-all-users", async (req, res) => {
  const users = await User.find({}, "id email username");
  res.json({ count: users.length, users });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill in all the fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exist" });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    const token = generateToken(user._id);

    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("REGISTRATION ERROR", error);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

// PROTECTED ROUTE
router.get("/me", protect, (req, res) => {
  res.status(200).json(req.user);
});

// JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default router;
