const User = require("../models/authUser");
const Admin = require("../models/authadmin");
const sendMail = require("../utils/mailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register user
const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullName,
      email,
      password,
    });

    const subject = "Registration Successful - Welcome to Lebagol";
    const text = `Hi ${fullName}, You are successfully registered.`;
    const html = `
      <div style="
        font-family: Arial, sans-serif; 
        background-color: #f9f9f9; 
        padding: 20px; 
        border-radius: 10px; 
        border: 1px solid #e0e0e0; 
        max-width: 600px; 
        margin: auto;
      ">
        <h2 style="
          color: #333333; 
          text-align: center;
        ">Welcome, ${fullName}!</h2>
        <p style="
          font-size: 16px; 
          color: #555555;
        ">
          You have successfully registered with our platform.
        </p>
        <p style="
          font-size: 16px; 
          color: #555555;
        ">
          We're excited to have you onboard 🚀
        </p>
        <div style="
          text-align: center; 
          margin-top: 30px;
        ">
          <a href="https://painfx-936j.vercel.app/login" style="
            display: inline-block; 
            background-color: #4CAF50; 
            color: #ffffff; 
            text-decoration: none; 
            padding: 12px 25px; 
            border-radius: 5px; 
            font-weight: bold;
          ">Go to Dashboard</a>
        </div>
        <p style="
          font-size: 12px; 
          color: #999999; 
          text-align: center; 
          margin-top: 20px;
        ">
          If you did not register, please ignore this email.
        </p>
      </div>
    `;

    try {
      await sendMail(email, subject, text, html);
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr);
    }

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id),
      message: "User registered successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let source = "user";
    let user = await User.findOne({ email });

    if (!user) {
      user = await Admin.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      source = "admin";
    }

    const isMatch = await (password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const role = user.role || source;

    res.json({
      _id: user._id,
      fullName: user.fullName || user.adminName,
      email: user.email,
      role: role,
      token: generateToken(user._id, role),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    let account = await User.findOne({ email });
    let source = "user";

    if (!account) {
      account = await Admin.findOne({ email });
      source = "admin";
    }

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, account.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid current password" });
    }

    const salt = await bcrypt.genSalt(10);
    account.password = await bcrypt.hash(newPassword, salt);

    await account.save({ validateBeforeSave: false });

    res.json({
      message: "Password updated successfully",
      role: source,
      email: account.email,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const foregtPassword = async (req, res) => {
  const { email } = req.body;

  try {
    let source = "user";
    let user = await User.findOne({ email });

    if (!user) {
      user = await Admin.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      source = "admin";
    }

    const fullName = user.fullName || user.adminName;
    const password = user.password; 


    const subject = "Forget Password";
    const text = `Hi ${fullName}, Your Older Password is ${password}.`;
    const html = `
      <div style="
        font-family: Arial, sans-serif; 
        background-color: #f9f9f9; 
        padding: 20px; 
        border-radius: 10px; 
        border: 1px solid #e0e0e0; 
        max-width: 600px; 
        margin: auto;
      ">
        <h2 style="
          color: #333333; 
          text-align: center;
        ">Welcome, ${fullName}!</h2>
        <h2 style="
          color: #333333; 
          text-align: center;
        ">older Password: ${password}</h2>
        <p style="
          font-size: 16px; 
          color: #555555;
        ">
          Succesfully send your password
        </p>
        <p style="
          font-size: 16px; 
          color: #555555;
        ">
          We're excited to have you onboard 
        </p>
        <div style="
          text-align: center; 
          margin-top: 30px;
        ">
          <a href="https://painfx-936j.vercel.app/login" style="
            display: inline-block; 
            background-color: #4CAF50; 
            color: #ffffff; 
            text-decoration: none; 
            padding: 12px 25px; 
            border-radius: 5px; 
            font-weight: bold;
          ">Go to Dashboard</a>
        </div>
        <p style="
          font-size: 12px; 
          color: #999999; 
          text-align: center; 
          margin-top: 20px;
        ">
          If the password is not correct please contact Admin  8445545226
        </p>
      </div>
    `;

    try {
      await sendMail(email, subject, text, html);
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr);
    }

    res.status(201).json({
      message: "Password send successfully on the mail",
      role: source,
      email: user.email,
      password: user.password
     }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
};

module.exports = {
  registerUser,  
  loginUser, 
  updatePassword,
  foregtPassword,
};