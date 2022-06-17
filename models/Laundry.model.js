const mongoose = require("mongoose");

const laundrySchema = mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["carpet", "bedding", "clothing"],
      default: "clothing",
    },

    name: {
      type: String,
      required: [true, "Please provide item name"],
    },

    price: {
      type: Number,
      required: [true, "Please provide item price"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Laundry", laundrySchema);
