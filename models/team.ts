import mongoose from "mongoose";

export interface Team {
  _id: mongoose.Types.ObjectId;
  school: string;
  event: string;
  verified: boolean;
  teacher: mongoose.Types.ObjectId;
  members:
    | mongoose.Types.ObjectId[]
    | { _id: string; name: string; phoneno: string; email: string }[];
}

const teamSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    enums: [
      "parabellum",
      "polemos",
      "suiver",
      "lux-veritas-implicas",
      "chroma",
      "memesis",
      "scio",
      "site-incroyable",
      "esprit-decode",
    ],
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "teacher",
    required: true,
  },
  members: {
    type: [mongoose.Types.ObjectId],
    ref: "member",
    required: true,
  },
});

export default mongoose.models.team || mongoose.model("team", teamSchema);
