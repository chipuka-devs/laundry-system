const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    laundry_items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ordered_Item",
      },
    ],

    total_price: {
      type: number,
    },

    status: {
      type: String,
      enum: ["picked", "pending", "delivering", "complete", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
