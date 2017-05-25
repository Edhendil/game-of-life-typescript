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
import {BrushFactory} from "./brush/brushFactory.service";
import {GameStateFactory} from "./state/gameStateFactory.service";
import {FrameRateCalculator} from "./engine/frameRate.service";
import {GameStateGeneratorService} from "./state/gameStateGenerator.service";
import {BrushPatternComponent} from "./brush/brushPattern.component";
import {BrushService} from "./brush/brush.service";
import {RuleSetService} from "./ruleset/ruleSet.service";
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
