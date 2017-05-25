import {BrushGenerator} from "./brushGenerator.model";
import {Injectable} from "@angular/core";
import {BrushFactory} from "./brushFactory.service";
/**
 * Created by edhendil on 27.04.17.
 */
@Injectable()
export class BrushService {

    private availableBrushes: BrushGenerator[] = [
        new BrushGenerator('eraser', this.brushFactory.eraser),
        new BrushGenerator('square', this.brushFactory.square),
        new BrushGenerator('cross', this.brushFactory.cross),
        new BrushGenerator('missile', this.brushFactory.missile),
        new BrushGenerator('custom', this.brushFactory.custom)
    ];

    constructor(private brushFactory: BrushFactory) {
    }

    getAllBrushGenerators(): BrushGenerator[] {
        return this.availableBrushes;
    }

}