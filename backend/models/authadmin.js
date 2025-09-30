const mongoose = require("mongoose");

const authadminSchema = new mongoose.Schema(
  {
    adminName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "superadmin"], 
      default: "admin", 
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("authAdmin", authadminSchema);
