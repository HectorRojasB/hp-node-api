import { Router, Request, Response } from "express";
import {
  getCharacter,
  getCharacters,
  postCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/character";

const router = Router();

router.get("/", getCharacter);
router.get("/:id", getCharacters);
router.post("/", postCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

export { router };
