import {injectable} from "tsyringe";

let _canvas!: HTMLCanvasElement;
let _context!: CanvasRenderingContext2D;

@injectable()
export class CanvasService {

    /**
     * CanvasService Constructor
     */
    constructor() {
    }

    /**
     * @return HTMLCanvasElement
     */
    get canvas(): HTMLCanvasElement {
        if (_canvas) {
            return _canvas;
        }

        throw Error('Canvas has not yet been initialized.')
    }

    /**
     * @return CanvasRenderingContext2D
     */
    get context(): CanvasRenderingContext2D {
        if(_context) {
            return _context;
        }

        throw Error('Context has not yet been initialized.')
    }

    /**
     * Clears the canvas.
     */
    public clear(): void {
        //this.context.clearRect(1000, 100, this.canvas.width, this.canvas.height); 
    }

    /**
     * Initiates a canvas element and appends it to the DOM.
     */
    public initCanvas(): void {
        _canvas = document.createElement('canvas');
        _context = _canvas.getContext('2d')!;

        _canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        _canvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        document.body.appendChild(_canvas);
    }


    public setBackground(img: HTMLImageElement): void {
        const heighRatio = this.canvas.height / img.height;
        const widthRatio = this.canvas.width / img.width;
        _context.drawImage(img, 0, 0, img.width, img.height,
                                0, 0, img.width * widthRatio, img.height * heighRatio);
    }
}