import {singleton} from 'tsyringe';
import {GameLoopService} from "./game-loop.service";

// ToDo: Rename
@singleton()
export class Main {

    constructor(private readonly gameLoopService: GameLoopService) {
    }

    public run(): void {
        this.gameLoopService.initLoop();

        console.log("Hello Team!");
    }
}