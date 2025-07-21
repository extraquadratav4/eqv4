import mongoose from "mongoose";

export interface Teacher {
  _id: mongoose.Types.ObjectId;
  school: string;
  email: string;
  phoneno: string;
  name: string;
}

const teacherSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
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
