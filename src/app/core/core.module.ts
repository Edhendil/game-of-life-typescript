/**
 * Created by edhendil on 25.04.17.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from "@angular/common";
import {throwIfAlreadyLoaded} from "./module-import-guard";
import {NavComponent} from "../shared/nav.component";
import {FooterComponent} from "../shared/footer.component";
@NgModule({
    imports: [CommonModule]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
