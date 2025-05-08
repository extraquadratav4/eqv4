import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.member || mongoose.model("member", memberSchema);
