import {Point} from "../../shared/point.model";
import {MouseEvents} from "../../shared/mouse-events";
/**
 * Created by edhendil on 26.04.17.
 */
export class CanvasMouseEvent {

    constructor(public coordinates: Point, public original: any) { }

    get leftButtonPressed(): boolean {
        return MouseEvents.isLeftButtonPressed(this.original);
    }

    get rightButtonPressed(): boolean {
        return MouseEvents.isRightButtonPressed(this.original);
    }

}