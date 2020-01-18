import {injectable} from "tsyringe";

@injectable()
export class GameLoopService {
    canvas = document.querySelector('canvas');
    context = this.canvas.getContext('2d');

    public draw(): void  {
        // Clear the Canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "red";

        // Draw the background
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        requestAnimationFrame(() => this.draw());
    }
}