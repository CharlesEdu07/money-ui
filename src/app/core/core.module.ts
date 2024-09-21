import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';

import { ErrorHandlerService } from './error-handler.service';
import { PersonService } from 'app/persons/person.service';
import { PostingService } from 'app/postings/posting.service';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService,
    ErrorHandlerService,
    PersonService,
    PostingService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
