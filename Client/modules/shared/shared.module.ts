import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DateTimeComponent } from './forms/date-time.component';

import { DynamicComponent } from './dynamic-component/dynamic-component.component';
import { BreadcrumbsComponent } from './nav/breadcrumbs.component';
import { HeaderComponent } from './nav/header.component';
import { FooterComponent } from './nav/footer.component';
import { IconBarComponent } from './nav/icon-bar.component';

// Services
import { DataService } from './services/data.service';
import { ApiGatewayService } from './services/api-gateway.service';
import { AuthService } from './services/auth.service';
import { HttpErrorHandlerService } from './services/http-error-handler.service';
import { UtilityService } from './services/utility.service';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // No need to export as these modules don't expose any components/directive etc'
        NgbModule.forRoot(),
        HttpModule,
        JsonpModule,
    ],
    declarations: [
        DateTimeComponent,
        FooterComponent,
        IconBarComponent,
        DynamicComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        UppercasePipe
    ],
    exports: [
        // Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule,
        // Providers, Components, directive, pipes
        DateTimeComponent,
        FooterComponent,
        DynamicComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        IconBarComponent,
        UppercasePipe
    ]

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // Providers
                HttpErrorHandlerService,
                ApiGatewayService,
                AuthService,
                DataService,
                UtilityService
            ]
        };
    }
}
