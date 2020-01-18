import {singleton} from 'tsyringe';
import {GameLoopService} from "./game-loop.service";
import { CanvasService } from './canvas.service';

// ToDo: Rename
@singleton()
export class Main {

    /**
     * Main Constructor
     *
     * @param gameLoopService
     * @param canvas
     */
    constructor(
        private readonly gameLoopService: GameLoopService,
        private readonly canvas: CanvasService
    ) {
    }

    /**
     * this function starts the game instance
     */
    public run(): void {
        this.canvas.initCanvas();
        this.gameLoopService.initLoop();

        console.log("Game initialized!");
    }
}