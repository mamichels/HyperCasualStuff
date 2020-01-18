import {injectable} from "tsyringe";

@injectable()
export class GameLoopService {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public initLoop(): void {
        if(document.querySelector('canvas')){
            this.canvas = document.querySelector('canvas');
            this.context = this.canvas.getContext('2d');

            requestAnimationFrame(this.draw);
        }
    }

    private draw(): void {
        // Clear the Canvas
        this.context.clearRect(0, 0, this.canvas?.width, this.canvas?.height);
        // Sets background color of context
        this.context.fillStyle = "red";

        // Draw the background
        this.context.fillRect(0, 0, this.canvas?.width, this.canvas?.height);

        requestAnimationFrame(this.draw);
    }
}