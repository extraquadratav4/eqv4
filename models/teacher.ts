import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.models.teacher ||
  mongoose.model("teacher", teacherSchema);
