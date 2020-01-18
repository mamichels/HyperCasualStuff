import {injectable} from "tsyringe";
import { CanvasService } from "./canvas.service";

@injectable()
export class GameLoopService {

    /**
     * GameLoopService Constructor
     *
     * @param canvas
     */
    constructor(private readonly canvas: CanvasService){
    }

    /**
     * initializes variables and starts game loop
     */
    public initLoop(): void {
        this.draw();
    }

    /**
     * part of the game loop, draws frames
     */
    private draw(): void {
        this.canvas.clear();

        // Draw the background
        this.canvas.context.fillStyle = 'red';
        this.canvas.context.fillRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
        
        requestAnimationFrame(this.draw.bind(this));
    }
}