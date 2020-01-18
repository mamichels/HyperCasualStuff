import {singleton} from 'tsyringe';

// ToDo: Rename
@singleton()
export class Main {

    constructor() {
    }

    public run(): void {
        console.log("Hello Team3!");
    }
}