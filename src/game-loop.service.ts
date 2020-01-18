import {injectable} from "tsyringe";

@injectable()
export class GameLoopService {

    public draw(): void {
        console.log('MArcel stinkt!');
    }
}