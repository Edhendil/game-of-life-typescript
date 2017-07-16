import {Brush} from "./brush.model";
/**
 * Created by edhendil on 27.04.17.
 */
export class BrushGenerator {

    constructor(public name: string, private factory: {():Brush}) {}

    create(): Brush {
        return this.factory();
    }

}