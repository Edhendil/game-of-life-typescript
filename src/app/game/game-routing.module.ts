/**
 * Created by edhendil on 26.04.17.
 */
import { NgModule }             from '@angular/core';
import {Route, RouterModule, Routes}        from '@angular/router';
import {GameComponent} from "./game.component";

const gameRoutes: Routes = [
    { path: '',  component: GameComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(gameRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GameRoutingModule { }
