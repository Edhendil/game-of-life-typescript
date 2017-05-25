/**
 * Created by edhendil on 27.04.17.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Brush} from "./brush.model";
import {MouseEvents} from "../../shared/mouseEvents";

@Component({
    selector: 'brush-pattern',
    templateUrl: './brushPattern.component.html',
    styleUrls: ['./brushPattern.component.css']
})
export class BrushPatternComponent implements OnInit {

    @Input() brush: Brush;

    constructor() {
    }

    ngOnInit() {
    }

    changeBrush(event: any, x: number, y: number): void {
        if (MouseEvents.isLeftButtonPressed(event) && event.ctrlKey) {
            this.brush.pattern[x][y] = null;
        } else if (MouseEvents.isRightButtonPressed(event)) {
            this.brush.pattern[x][y] = false;
        } else if (MouseEvents.isLeftButtonPressed(event)) {
            this.brush.pattern[x][y] = true;
        }
    }

    brushMoveChange(event: any, x: number, y: number): void {
        this.changeBrush(event, x, y);
    }

}