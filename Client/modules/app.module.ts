import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/Router';

import { routing } from './app.routes';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { PageManager } from './shared/services/page-manager.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        // Only module that app module loads
        SharedModule.forRoot()
    ],
    providers: [
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    /* Initialize singleton of App Service with PageManager */
    constructor(appService: AppService, pageManager: PageManager) {
        appService.pageManager = pageManager;
     }
}
