import {Injectable} from "@angular/core";
/**
 * Created by edhendil on 25.04.17.
 */
@Injectable()
export class FrameRateCalculator {

    private frameCountLimit = 30;
    private frameEndTimes: number[];

    reset(): void {
        this.frameEndTimes = [];
        var frameEndTime = new Date()
            .getTime();
        this.frameEndTimes.push(frameEndTime);
    }

    next(): number {
        let newEndTime = new Date()
            .getTime();
        this.frameEndTimes.push(newEndTime);
        if (this.frameEndTimes.length > this.frameCountLimit) {
            this.frameEndTimes.shift();
        }
        return Math.floor(1 / ((newEndTime - this.frameEndTimes[0]) / 1000) * this.frameEndTimes.length);
    }

}