const mongoose = require("mongoose");

const orderedItemSchema = mongoose.Schema(
  {
    laundry_item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Laundry",
    },

    number_of_pieces: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ordered_Item", orderedItemSchema);
