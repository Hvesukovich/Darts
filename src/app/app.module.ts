import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageStartComponent } from './page-start/page-start.component';
import { CountPointsComponent } from './count-points/count-points.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { ParticipantOnBoardComponent } from './participant-on-board/participant-on-board.component';
import { CountPointsGuard } from './count-points.guard';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        PageStartComponent,
        CountPointsComponent,
        LogoComponent,
        ParticipantOnBoardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [CountPointsGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
