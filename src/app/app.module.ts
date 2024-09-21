import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PostingsModule } from './postings/postings.module';
import { PersonsModule } from './persons/persons.module';

import { PostingService } from './postings/posting.service';
import { PersonService } from './persons/person.service';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { ToastyModule } from 'ng2-toasty';

import { ConfirmationService } from 'primeng/components/common/api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ConfirmDialogModule,
    CoreModule,
    HttpModule,
    PersonsModule,
    PostingsModule,
    ToastyModule.forRoot(),
  ],
  providers: [PostingService, PersonService, ConfirmationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
