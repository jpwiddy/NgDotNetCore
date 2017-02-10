import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PageComponent } from './page.component';
import { routing } from './page.routes';


@NgModule({
    imports: [routing, SharedModule],
    declarations: [PageComponent]
})
export class PageModule { }
