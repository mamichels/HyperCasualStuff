import {injectable} from "tsyringe";

@injectable()
export class CanvasService {
    private _canvas!: HTMLCanvasElement | null;
    private _context!: CanvasRenderingContext2D | null;

    constructor() {
    }

    /**
     * @return HTMLCanvasElement
     */
    get canvas(): HTMLCanvasElement {
        if (this._canvas) {
            return this._canvas;
        }

        throw Error('Canvas has not yet been initialized.')
    }

    /**
     * @return CanvasRenderingContext2D
     */
    get context(): CanvasRenderingContext2D {
        if(this._context) {
            return this._context;
        }

        throw Error('Context has not yet been initialized.')
    }

    /**
     * Initiates a canvas element and appends it to the DOM.
     */
    public initCanvas(): void {
        this._canvas = document.createElement('canvas');
        this._context = this._canvas.getContext('2d');

        document.body.appendChild(this._canvas)
    }
}