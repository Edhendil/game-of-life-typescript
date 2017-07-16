/**
 * Created by edhendil on 25.04.17.
 */
import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {ElementRef,Renderer2, Output, EventEmitter} from '@angular/core';
import {GameState} from "../state/game-state.model";
import {Point} from "../../shared/point.model";
import {CanvasMouseEvent} from "./canvas-mouse-move.event";
@Component({
    selector: 'gol-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
})
export class CanvasComponent {

    @ViewChild("canvas") canvas: ElementRef;

    @Output() gameMouseClick = new EventEmitter<CanvasMouseEvent>();
    @Output() gameMouseMove = new EventEmitter<CanvasMouseEvent>();

    private offscreenCanvas = this.renderer.createElement("canvas");

    constructor(private renderer: Renderer2) {
    }

    init(width: number, height: number): void {
        let element = this.canvas.nativeElement;
        element.width = width;
        element.height = height;
        let ctx: CanvasRenderingContext2D = element.getContext('2d');
        ctx.imageSmoothingEnabled = false;
    }

    resize(width: number, height: number): void {
        let element = this.canvas.nativeElement;
        element.width = width;
        element.height = height;
    }

    updateCanvas(lifeState: GameState): void {
        this.offscreenCanvas.width = lifeState.width;
        this.offscreenCanvas.height = lifeState.height;
        let offscreenCtx: CanvasRenderingContext2D = this.offscreenCanvas.getContext('2d');
        let imageData: ImageData = offscreenCtx.createImageData(lifeState.width, lifeState.height);
        for (let i = 0; i < lifeState.width; i++) {
            for (let j = 0; j < lifeState.height; j++) {
                if (lifeState.getField(i, j)) {
                    this.setBlack(imageData, i, j);
                } else {
                    this.setWhite(imageData, i, j);
                }
            }
        }
        offscreenCtx.putImageData(imageData, 0, 0);
        let element = this.canvas.nativeElement;
        let ctx: CanvasRenderingContext2D = element.getContext('2d');
        ctx.scale(element.width / lifeState.width, element.height / lifeState.height);
        ctx.drawImage(this.offscreenCanvas, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    private getMousePos(evt: any): Point {
        let rect = this.canvas.nativeElement.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    handleCanvasMouseClick(e: any) {
        let pos = this.getMousePos(e);
        this.gameMouseClick.emit(new CanvasMouseEvent(pos, e));
    }

    handleCanvasMouseMove(e: any) {
        let pos = this.getMousePos(e);
        let event = new CanvasMouseEvent(pos, e);
        this.gameMouseMove.emit(event);
    }

    private setBlack(data: ImageData, x: number, y: number): void {
        let index = (y * data.width + x) * 4;
        data.data[index] = 0;
        data.data[index + 1] = 0;
        data.data[index + 2] = 0;
        data.data[index + 3] = 255;
    }

    private setWhite(data: ImageData, x: number, y: number): void {
        let index = (y * data.width + x) * 4;
        data.data[index] = 255;
        data.data[index + 1] = 255;
        data.data[index + 2] = 255;
        data.data[index + 3] = 255;
    }

}