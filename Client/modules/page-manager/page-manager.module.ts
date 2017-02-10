import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PageManagerComponent } from './page-manager.component';
import { routing } from './page-manager.routes';


@NgModule({
    imports: [routing, SharedModule],
    declarations: [PageManagerComponent]
})
export class PageManagerModule { }
