import {injectable} from "tsyringe";

@injectable()
export class CanvasService {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;

    constructor() {
        this.initCanvas();
    }

    /**
     * creates Canvas element and appends it to the DOM
     */
    public initCanvas(): void {
        this.canvas = new HTMLCanvasElement();
        this.context = this.canvas.getContext('2d');

        document.appendChild(this.canvas);
    }

    /**
     * @return HTMLCanvasElement
     */
    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    /**
     * @return CanvasRenderingContext2D
     */
    public getContext(): CanvasRenderingContext2D {
        if(this.context)
        {
            return this.context;
        }
    }
}