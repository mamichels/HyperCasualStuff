import {injectable} from "tsyringe";
import { CanvasService } from "./canvas.service";
import { BackgroundManager } from "./background.manager";

@injectable()
export class GameLoopService {

    /**
     * GameLoopService Constructor
     *
     * @param canvas
     */
    constructor(private readonly canvas: CanvasService,
                private readonly backgroundManager: BackgroundManager){
    }

    /**
     * initializes variables and starts game loop
     */
    public initLoop(): void {
        this.draw();
        this.backgroundManager.setBackground();
    }

    /**
     * part of the game loop, draws frames
     */
    private draw(): void {
        this.canvas.clear();

        // Draw the background
        //this.canvas.setBackground();

        //Draw the tiles

        //Draw the updated player

        requestAnimationFrame(this.draw.bind(this));
    }
}