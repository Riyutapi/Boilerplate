import { EChoices } from "enum/choices.enum";
import { EGitName } from "enum/gitName.enum";
import { IRes } from "interface/res.interface";
import path from "path";
import shellJs from "shelljs"
import fs from "node:fs"

class GenerateController {
    public gen(res: IRes){
        switch (res.tech){
            case EChoices.NODE_TS:
                this._execPath(EGitName.NODE_TS, res.folderName)
                break;
            case EChoices.SCSS:
                this._execPath(EGitName.SCSS, res.folderName)
                break;
        }
    }

    private _execPath(gitName: string, folderName: string){
        try {
            shellJs.cd(path.resolve());
            shellJs.exec(`git clone https://github.com/troquatte/${gitName}.git`);
            fs.renameSync(
                `${path.join(path.resolve(), gitName)}`,
                `${path.join(path.resolve(), folderName)}`
            );
            return shellJs.exit();
        } catch (error) {
            console.error(error)
        }
    }

}

export const GenFile = new GenerateController();