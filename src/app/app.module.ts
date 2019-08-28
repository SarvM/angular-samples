import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlayPipeComponent } from './play-pipe/play-pipe.component';
import { PlayCustomPipeComponent } from './play-custom-pipe/play-custom-pipe.component';
import { ReversePipe } from './play-custom-pipe/reverse.pipe';
import { PipeImpureComponent } from './pipe-impure/pipe-impure.component';
import { EducationPipe } from './pipe-impure/education.pipe';
import { PlayRouteComponent } from './play-route/play-route.component';

import { PlayRouteHomeComponent } from './play-route/play-route-home.component'
import { PlayRouteFeatureComponent } from './play-route/play-route-feature.component'
import { PlayRoutePricingComponent } from './play-route/play-route-prcing.component'

const appRoutes: Routes = [
  { path: 'home', component: PlayRouteHomeComponent },
  { path: 'pricing', component: PlayRoutePricingComponent },
  { path: 'feature', component: PlayRouteFeatureComponent }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, PlayPipeComponent, PlayCustomPipeComponent, ReversePipe, PipeImpureComponent, EducationPipe, PlayRouteComponent, PlayRouteHomeComponent, PlayRouteFeatureComponent, PlayRoutePricingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
