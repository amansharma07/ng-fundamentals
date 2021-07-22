import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Eventcomponent } from './app.Eventcomponent';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Eventcomponent
  ],
  bootstrap: [Eventcomponent]
})
export class AppModule { }
