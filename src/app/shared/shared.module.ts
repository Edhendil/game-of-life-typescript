/**
 * Created by edhendil on 26.04.17.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RangePipe} from "./range.pipe";
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./nav.component";
import {FooterComponent} from "./footer.component";
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [RangePipe, NavComponent, FooterComponent],
    exports: [RangePipe, NavComponent, FooterComponent, CommonModule, FormsModule]
})
export class SharedModule {
}
