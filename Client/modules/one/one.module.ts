import { NgModule } from '@angular/core';

import { OneComponent } from './one.component';
import { routing } from './one.routes';

@NgModule({
    imports: [routing],
    declarations: [OneComponent]
})
export class OneModule { }
