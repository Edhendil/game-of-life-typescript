/**
 * Created by edhendil on 25.04.17.
 */
import {AfterViewInit, Component, OnDestroy, ViewChild} from "@angular/core";
import {Brush} from "./brush/brush.model";
import {GameState} from "./state/game-state.model";
import {BrushFactory} from "./brush/brush-factory.service";
import {RuleSet} from "./ruleset/rule-set.model";
import {Subscription} from "rxjs/Subscription";
import {CanvasComponent} from "./canvas/canvas.component";
import {CanvasMouseEvent} from "./canvas/canvas-mouse-move.event";
import {Point} from "../shared/point.model";
import {GameStateGeneratorService} from "./state/game-state-generator.service";
import {GameStateGenerator} from "./state/game-state-generator.model";
import {BrushGenerator} from "./brush/brush-generator.model";
import {BrushService} from "./brush/brush.service";
import {RuleSetService} from "./ruleset/rule-set.service";
import {GameEngine} from "./engine/engine.service";
@Component({
    selector: 'gol-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit, OnDestroy {

    constructor(private gameEngine: GameEngine, private gameStateService: GameStateGeneratorService, private brushService: BrushService, private ruleSetService: RuleSetService) {

    }

    @ViewChild(CanvasComponent) private canvas: CanvasComponent;

    private stateSubscription: Subscription = null;

    private canvasWidth = 512;
    private canvasHeight = 512;

    private gameWidth = 256;
    private gameHeight = 256;

    selectedRules: RuleSet = null;

    tickerButtonText = 'Start';

    fpsLimit = 25;
    realFps = 0;

    brush: Brush = null;

    availableStates: GameStateGenerator[];
    availableRules: RuleSet[];
    availableBrushes: BrushGenerator[];

    selectedRuleSet: RuleSet;
    selectedBrush: BrushGenerator;
    selectedState: GameStateGenerator;

    stepButtonDisabled = false;

    private gameState: GameState = null;

    ngAfterViewInit(): void {
        this.availableStates = this.gameStateService.getAllStateFactories();
        this.availableBrushes = this.brushService.getAllBrushGenerators();
        this.availableRules = this.ruleSetService.getAllRules();
        this.selectedState = this.availableStates[0];
        this.selectedBrush = this.availableBrushes[4];
        this.selectedRuleSet = this.availableRules[0];
        this.loadRulePreset();
        this.brush = this.selectedBrush.create();
        this.canvas.init(this.canvasWidth, this.canvasHeight);
        this.stateSubscription = this.gameEngine.monitorState().subscribe(state => {this.gameState = state; this.canvas.updateCanvas(state); this.realFps = this.gameEngine.currentFps});
        let gameState = this.gameStateService.getByName('empty').create(this.gameWidth, this.gameHeight);
        this.gameEngine.setState(gameState);
    }

    ngOnDestroy(): void {
        this.stateSubscription.unsubscribe();
    }

    handleFpsLimitChange() {
        if (this.gameEngine.running) {
            this.stop();
            this.start(this.fpsLimit);
        }
    }

    loadRulePreset() {
        this.selectedRules = RuleSet.clone(this.selectedRuleSet);
        this.gameEngine.setRules(this.selectedRules);
    }

    handleSetStateButton() {
        let newState = this.selectedState.create(this.gameWidth, this.gameHeight);
        this.gameEngine.setState(newState);
    };

    handleStartStopButton() {
        if (this.gameEngine.running) {
            this.stop();
        } else {
            this.start(this.fpsLimit);
        }
    }

    performStep(): void {
        this.gameEngine.step();
    }

    handleCanvasMove(e: CanvasMouseEvent): void {
        if (e.leftButtonPressed) {
            this.canvasBrushPaint(e.coordinates);
        }
    }

    handleCanvasClick(e: CanvasMouseEvent): void {
        this.canvasBrushPaint(e.coordinates);
    }

    private start(fps: number): void {
        this.gameEngine.start(fps);
        this.stepButtonDisabled = true;
        this.tickerButtonText = 'Stop';
    }

    private stop(): void {
        this.gameEngine.stop();
        this.stepButtonDisabled = false;
        this.realFps = 0;
        this.tickerButtonText = 'Start';
    }

    private canvasBrushPaint(position: Point) {
        var x = Math.floor(position.x * (this.gameWidth / this.canvasWidth));
        var y = Math.floor(position.y * (this.gameHeight / this.canvasHeight));
        this.paint(this.gameState, x, y, this.brush);
        this.gameEngine.setState(this.gameState);
    }

    private paint(lifeState: GameState, x: number, y: number, brush: Brush): void {
        let scaledSize = brush.size * brush.scale;
        let baseX = x - Math.floor(scaledSize / 2);
        let baseY = y - Math.floor(scaledSize / 2);
        for (let i = 0; i < scaledSize; i++) {
            for (let j = 0; j < scaledSize; j++) {
                let patternX = Math.floor(i / brush.scale);
                let patternY = Math.floor(j / brush.scale);
                let stateX = baseX + i;
                let stateY = baseY + j;
                if (stateX > -1 && stateX < lifeState.width && stateY > -1 && stateY < lifeState.height) {
                    if (brush.pattern[patternX][patternY] != null) {
                        lifeState.setField(stateX, stateY, brush.pattern[patternX][patternY]);
                    }
                }
            }
        }
    }

}