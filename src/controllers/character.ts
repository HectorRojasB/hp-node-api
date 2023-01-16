import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getCharacter = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_CHARACTER");
  }
};

const getCharacters = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_CHARACTERS");
  }
};

const updateCharacter = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CHARACTER");
  }
};

const postCharacter = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CHARACTER");
  }
};

const deleteCharacter = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CHARACTER");
  }
};

export {
  getCharacter,
  getCharacters,
  updateCharacter,
  postCharacter,
  deleteCharacter,
};
