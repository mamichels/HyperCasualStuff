import {injectable} from "tsyringe";

@injectable()
export class GameLoopService {
    private canvas: HTMLCanvasElement | null = null;
    private context: CanvasRenderingContext2D | null = null;

    public initLoop(): void {
            this.canvas = document.querySelector('canvas');
            if (this.canvas) {
                this.context = this.canvas.getContext('2d');

                requestAnimationFrame(this.draw.bind(this));
            }
        }
        
    private draw(): void {
        if(this.canvas && this.context){
            // Clear the Canvas
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // Sets background color of context
            this.context.fillStyle = "red";

            // Draw the background
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        requestAnimationFrame(this.draw);
    }
}