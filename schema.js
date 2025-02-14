const mongoose = require("mongoose");

// Define the schema
const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

// Export the model
const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;