import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';
import { DisableforwardseekingDirective } from './disableforwardseeking.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    PlayerComponent,
    DisableforwardseekingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
