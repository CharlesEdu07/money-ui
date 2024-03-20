import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
