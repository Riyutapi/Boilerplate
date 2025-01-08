import { GenFile } from 'controller/generate.controller';
import inquirer from 'inquirer';
import { IRes } from 'interface/res.interface';
import { questions } from 'questions';


class Init {
  constructor() {
    inquirer.prompt(questions).then((res: IRes) => {
      GenFile.gen(res);
    });
  }
}

new Init();
