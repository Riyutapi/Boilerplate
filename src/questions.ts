import { EChoices } from "enum/choices.enum";
import path from "path";
import fs from "node:fs"
import { EErrors } from "enum/errors.enum";
import { EGitName } from "enum/gitName.enum";

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar?',
    choices: [EChoices.NODE_TS, EChoices.SCSS]
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual nome da pasta do Projeto?',
    validate(folderName: string){
      if(!folderName) return EErrors.NULL;

      if(/[^\w\s-]/.test(folderName)) return EErrors.SPECIAL;

      if(folderName === EGitName.NODE_TS || folderName === EGitName.SCSS){
        return EErrors.GIT_NAME;
      }

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return EErrors.INVALID_FOLDER;
      } catch (error) {}

      return true
    }
  },
];