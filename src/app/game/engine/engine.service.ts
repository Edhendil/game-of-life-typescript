/**
 * Created by edhendil on 27.04.17.
 */
import {Injectable} from "@angular/core";
import {GameState} from "../state/gameState.model";
import {FrameRateCalculator} from "./frameRate.service";
import {RuleSet} from "../ruleset/ruleSet.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GameEngine {

    constructor(private frameRateService: FrameRateCalculator) {}

    private stateObservable = new Subject();

    running: boolean = false;

    private gameState: GameState;
    private rules: RuleSet;

    currentFps: number = 0;

    private intervalId: number;

    monitorState(): Observable<GameState> {
        return this.stateObservable.asObservable();
    }

    start(fps: number): void {
        this.frameRateService.reset();
        this.running = true;
        this.intervalId = window.setInterval(() => {
            this.step();
        }, 1000/fps);
    }

    stop(): void {
        clearInterval(this.intervalId);
        this.running = false;
        this.currentFps = 0;
    }

    step(): void {
        this.setState(this.gameState.updateLife(this.rules));
        if (this.running) {
            this.currentFps = this.frameRateService.next();
        }
    }

    setState(state: GameState) {
        this.gameState = state;
        this.stateObservable.next(this.gameState);
    }

    setRules(rules: RuleSet) {
        this.rules = rules;
    }

}