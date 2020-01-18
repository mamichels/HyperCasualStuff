import {singleton} from 'tsyringe';

// ToDo: Rename
@singleton()
export default class Main {

    constructor() {
    }

    public run(): void {
        console.log("Hello Team!");
    }
}