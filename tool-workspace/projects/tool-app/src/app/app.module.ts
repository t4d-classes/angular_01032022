import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorToolModule } from 'color-tool';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColorToolModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
