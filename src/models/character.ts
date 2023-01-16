import { Schema, Types, model, Model } from "mongoose";
import { Character } from "../interfaces/character.interface";

const characterSchema = new Schema<Character>(
  {
    name: {
      type: String,
      required: true,
    },
    bloodStatus: {
      type: String,
    },
    house: {
      type: String,
    },
    boggart: {
      type: String,
    },
    patronus: {
      type: String,
    },
    side: {
      type: String,
      enum: ["good", "evil", "neutral"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const characterModel = model("characters", characterSchema);
export default characterModel;
