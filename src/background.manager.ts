import {injectable} from "tsyringe";
import { CanvasService } from "./canvas.service";

@injectable()
export class BackgroundManager {

    constructor(private readonly canvas: CanvasService) {
    }

    public setBackground(): void {
        const img = new Image();
        img.onload = () => this.canvas.setBackground(img);
        img.src = './assets/background/Layer_0001_8.png';
        img.alt = 'background layer';
    }

    /** @todo implement handling of background layers */

    /** @todo implement handling of shifting layers in x-direction */

    /** @todo implement fading behaviour */
}