import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CountPointsComponent } from './count-points/count-points.component';
import { PageStartComponent } from './page-start/page-start.component';
import { CountPointsGuard } from './count-points.guard';

const ROUTES = [
    { path: '', component: PageStartComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'start', component: PageStartComponent },
    { path: 'count-points', component: CountPointsComponent, canActivate: [CountPointsGuard] },
    { path: '**', component: RegistrationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
