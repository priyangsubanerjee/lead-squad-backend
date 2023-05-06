const mongoose = require("mongoose");
const { Schema } = mongoose;

const organizationSchema = new Schema({
  name: {
    type: String,
  },
  members: {
    type: Array,
    default: [],
  },
  tasks: {
    type: Array,
    default: [],
  },
  requests: {
    type: Array,
    default: [],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  created_by: {
    type: String,
    required: true,
  },
});

mongoose.models = {};
module.exports =
  mongoose.models.organizations ||
  mongoose.model("organizations", organizationSchema);
