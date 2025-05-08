import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
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
  team: {
    type: mongoose.Types.ObjectId,
    ref: "team",
    required: true,
  },
});

export default mongoose.models.registration ||
  mongoose.model("registration", registrationSchema);
