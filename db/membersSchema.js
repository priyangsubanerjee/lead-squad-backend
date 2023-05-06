const mongoose = require("mongoose");
const { Schema } = mongoose;

const membersSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  organizations: {
    type: Array,
    default: [],
  },
});

mongoose.models = {};
module.exports =
  mongoose.models.members || mongoose.model("members", membersSchema);
