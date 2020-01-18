import {injectable} from "tsyringe";
import { CanvasService } from "./canvas.service";

@injectable()
export class GameLoopService {

    constructor(private readonly canvas: CanvasService){

    }

    /**
     * initializes variables and starts game loop
     */
    public initLoop(): void {
        requestAnimationFrame(this.draw.bind(this));
    }

    /**
     * part of the game loop, draws frames
     */
    private draw(): void {
        this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
        // Sets background color of context
        this.canvas.context.fillStyle = "red";

        // Draw the background
        this.canvas.context.fillRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
        
        requestAnimationFrame(this.draw);
    }
}