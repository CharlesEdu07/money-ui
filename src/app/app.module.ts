import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PostingsModule } from './postings/postings.module';
import { PersonsModule } from './persons/persons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    PersonsModule,
    PostingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
