/**
 * Created by edhendil on 26.04.17.
 */
import {Injector, NgModule}              from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

const MAIN_STATES: Routes = [
    {path: '*', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(MAIN_STATES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}