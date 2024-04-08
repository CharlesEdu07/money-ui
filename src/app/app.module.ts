import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { PostingsModule } from './postings/postings.module';
import { PersonsModule } from './persons/persons.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    PersonsModule,
    PostingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
