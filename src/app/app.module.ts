import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlayPipeComponent } from './play-pipe/play-pipe.component';
import { PlayCustomPipeComponent } from './play-custom-pipe/play-custom-pipe.component';
import { ReversePipe } from './play-custom-pipe/reverse.pipe';
import { PipeImpureComponent } from './pipe-impure/pipe-impure.component';
import { EducationPipe } from './pipe-impure/education.pipe';
import { PlayRouteComponent } from './play-route/play-route.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PlayPipeComponent, PlayCustomPipeComponent, ReversePipe, PipeImpureComponent, EducationPipe, PlayRouteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
