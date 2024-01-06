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

const requiredDate = {
  type: Date,
  required: true,
};

const EventSchema = new Schema(
  {
    owner: requiredNumber,
    name: requiredString,
    eventDate: requiredDate,
    sendReminder: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
