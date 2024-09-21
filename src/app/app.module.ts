import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PostingsModule } from './postings/postings.module';
import { PersonsModule } from './persons/persons.module';

import { PostingService } from './postings/posting.service';
import { PersonService } from './persons/person.service';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { ConfirmationService } from 'primeng/components/common/api';

import { ToastyModule } from 'ng2-toasty';

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
  providers: [
    PostingService,
    PersonService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
