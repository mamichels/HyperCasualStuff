import {singleton} from 'tsyringe';
import {GameLoopService} from "./game-loop.service";
import { CanvasService } from './canvas.service';

// ToDo: Rename
@singleton()
export class Main {

    constructor(private readonly gameLoopService: GameLoopService,
                private readonly canvas: CanvasService) {
    }

    public run(): void {
        this.canvas.initCanvas();
        this.gameLoopService.initLoop();

        console.log("Game initialized!");
    }
}