const mongoose = require("mongoose");

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

const InviteSchema = new Schema(
  {
    eventId: requiredString,
    userId: requiredNumber,
    name: requiredString,
    email: requiredString,
    status: {
      type: String,
      enum: ["INVITED", "DECLINED", "ACCEPTED"],
      default: "INVITED",
    },
  },
  { timestamps: true }
);

const Invite = mongoose.model("Invite", InviteSchema);

module.exports = Invite;
