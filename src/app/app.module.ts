import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { PostingsModule } from './postings/postings.module';
import { PersonsModule } from './persons/persons.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { PostingService } from './postings/posting.service';

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
    PostingsModule,
  ],
  providers: [PostingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
