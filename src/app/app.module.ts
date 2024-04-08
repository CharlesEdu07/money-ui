import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostingsModule } from './postings/postings.module';
import { PersonsModule } from './persons/persons.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    PersonsModule,
    PostingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
