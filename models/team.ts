import mongoose from "mongoose";

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
      "lux-veritas-implica",
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
