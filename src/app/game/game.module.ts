/**
 * Created by edhendil on 25.04.17.
 */
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {GameComponent} from "./game.component";
import {GameRoutingModule} from "./game-routing.module";
import {CanvasComponent} from "./canvas/canvas.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {BrushFactory} from "./brush/brush-factory.service";
import {GameStateFactory} from "./state/game-state-factory.service";
import {FrameRateCalculator} from "./engine/frame-rate.service";
import {GameStateGeneratorService} from "./state/game-state-generator.service";
import {BrushPatternComponent} from "./brush/brush-pattern.component";
import {BrushService} from "./brush/brush.service";
import {RuleSetService} from "./ruleset/rule-set.service";
import {GameEngine} from "./engine/engine.service";
@NgModule({
    imports: [GameRoutingModule, SharedModule],
    declarations: [
        GameComponent, CanvasComponent, BrushPatternComponent
    ],
    providers: [
        GameStateFactory, BrushFactory, FrameRateCalculator, GameStateGeneratorService, BrushService, RuleSetService, GameEngine
    ]
})
export class GameModule { }
